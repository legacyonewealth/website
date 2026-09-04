import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = Number(process.env.PORT || 4000);

// ---------------------------------------------------------------------------
// Google Form configuration — these values are public (no secrets required).
// Submissions go to the linked Google Sheet.
// ---------------------------------------------------------------------------
const GOOGLE_FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLScab4CTkSFp-_gHE6OFbkuJ6PKoh0po89vp1xDYT9p1cW-0SA/formResponse';

const ENTRY_IDS = {
  name: 'entry.1412451286',
  mobile: 'entry.296215142',
  email: 'entry.1135401336',
  city: 'entry.1973286193',
  profession: 'entry.543389413',
  wealthRange: 'entry.812122508',
  topics: 'entry.2044729598',
  message: 'entry.1485218212',
  preferredContactMode: 'entry.896929317',
} as const;

// Map the frontend's mode value to the Google Form's option label.
const CALLBACK_MAP: Record<string, string> = {
  phone: 'Direct Phone Call',
  whatsapp: 'WhatsApp',
  email: 'Email',
};

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:4173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));

// ---- Origin guard: only allow requests that come from our own site ----
app.use('/api', (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ ok: false, error: 'Forbidden.' });
  }
  return next();
});

// ---- Simple in-memory rate limiter (per IP) ----
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 10;
const hits = new Map<string, { count: number; resetAt: number }>();

const rateLimit = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return next();
  }

  entry.count += 1;
  if (entry.count > MAX_REQUESTS) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' });
  }
  return next();
};

// ---- Input helpers ----
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const stripTags = (value: unknown) => String(value ?? '').replace(/<[^>]*>/g, '').trim();
const clean = (value: unknown, max: number) => stripTags(value).slice(0, max);

app.post('/api/contact', rateLimit, async (req: Request, res: Response) => {
  const body = (req.body || {}) as Record<string, unknown>;

  // Honeypot: bots fill the hidden field — accept silently without submitting.
  if (stripTags(body.website)) {
    return res.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const mobile = clean(body.mobile, 20);
  const email = clean(body.email, 254);
  const city = clean(body.city, 80);
  const profession = clean(body.profession, 100);
  const wealthRange = clean(body.wealthRange, 80);
  const message = clean(body.message, 2000);
  const preferredContactMode = clean(body.preferredContactMode, 20);
  const topics = Array.isArray(body.discussionTopics)
    ? body.discussionTopics.map((t) => clean(t, 80)).filter(Boolean).slice(0, 20)
    : [];

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: 'A valid email address is required.' });
  }

  const callbackValue = CALLBACK_MAP[preferredContactMode] || preferredContactMode;

  // Build an application/x-www-form-urlencoded payload for Google Forms.
  const params = new URLSearchParams();
  params.append(ENTRY_IDS.name, name);
  params.append(ENTRY_IDS.mobile, mobile);
  params.append(ENTRY_IDS.email, email);
  params.append(ENTRY_IDS.city, city);
  params.append(ENTRY_IDS.profession, profession);
  params.append(ENTRY_IDS.wealthRange, wealthRange);
  for (const topic of topics) {
    params.append(ENTRY_IDS.topics, topic);
  }
  params.append(ENTRY_IDS.message, message);
  params.append(ENTRY_IDS.preferredContactMode, callbackValue);

  try {
    const response = await fetch(GOOGLE_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('Google Form error:', response.status, detail.slice(0, 500));
      return res.status(502).json({ ok: false, error: 'Failed to submit.' });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Google Form submit error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to submit.' });
  }
});

// Serve the built frontend in production (development uses Vite on :3000).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

app.use(express.static(distDir));
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/api/')) return next();
  return res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
