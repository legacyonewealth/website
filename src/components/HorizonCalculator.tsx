import React, { useState, useMemo } from 'react';
import { TrendingUp, ShieldCheck, Sparkles, RefreshCw, ArrowRight, Info, Award } from 'lucide-react';

export const HorizonCalculator: React.FC<{ onStartConversation: () => void }> = ({ onStartConversation }) => {
  const [initialCorpus, setInitialCorpus] = useState<number>(5000000); // 50 Lakhs default
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100000); // 1 Lakh / month
  const [years, setYears] = useState<number>(15); // 15 years
  const [strategy, setStrategy] = useState<'preservation' | 'balanced' | 'growth'>('balanced');
  const [inflationRate, setInflationRate] = useState<number>(6);

  // Strategy return assumptions (illustrative for simulation)
  const returnRates = {
    preservation: 8.0, // Fixed income + conservative hybrid
    balanced: 11.5,     // Multi-asset allocation
    growth: 13.5        // Equity + PMS / AIF orientation
  };

  const results = useMemo(() => {
    const annualRate = returnRates[strategy] / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;

    // Future value of initial lump sum
    const fvInitial = initialCorpus * Math.pow(1 + annualRate, years);

    // Future value of monthly SIP
    let fvSIP = 0;
    if (monthlyRate > 0) {
      fvSIP = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    } else {
      fvSIP = monthlyContribution * totalMonths;
    }

    const totalProjected = fvInitial + fvSIP;
    const totalInvested = initialCorpus + (monthlyContribution * totalMonths);
    const wealthCreated = Math.max(0, totalProjected - totalInvested);

    // Inflation adjustment
    const inflationFactor = Math.pow(1 + (inflationRate / 100), years);
    const realPurchasingPower = totalProjected / inflationFactor;

    // Recommended protection rule-of-thumb (10x-15x annual income/spend coverage)
    const suggestedProtection = Math.max(25000000, initialCorpus * 3);

    return {
      totalProjected,
      totalInvested,
      wealthCreated,
      realPurchasingPower,
      suggestedProtection
    };
  }, [initialCorpus, monthlyContribution, years, strategy, inflationRate]);

  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div id="horizon-calculator" className="bg-white rounded-2xl border border-[#0F2D2E]/15 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#0F2D2E] text-white p-6 sm:p-8 border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#A68B5B] sans-ui mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulation</span>
          </div>
          <h3 className="serif-display text-2xl sm:text-3xl font-normal text-white">
            Wealth & Legacy Horizon Visualizer
          </h3>
          <p className="text-sm text-[#B3C4BF] mt-1 font-light">
            Simulate the multi-decade power of disciplined asset allocation, periodic compounding, and wealth protection.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 bg-[#F5F2ED]">
        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Strategy Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#555555] mb-2 sans-ui">
              Asset Allocation Orientation
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setStrategy('preservation')}
                className={`p-3 rounded-lg text-left border text-xs sm:text-sm transition-all cursor-pointer ${
                  strategy === 'preservation'
                    ? 'border-[#0F2D2E] bg-[#0F2D2E] text-white shadow-sm'
                    : 'border-[#0F2D2E]/15 bg-white text-[#1A1A1A] hover:border-[#A68B5B]'
                }`}
              >
                <div className="font-semibold">Preservation</div>
                <div className={`text-[10px] mt-0.5 ${strategy === 'preservation' ? 'text-white/80' : 'text-[#6A6864]'}`}>
                  Fixed Income + Yield
                </div>
              </button>

              <button
                type="button"
                onClick={() => setStrategy('balanced')}
                className={`p-3 rounded-lg text-left border text-xs sm:text-sm transition-all cursor-pointer ${
                  strategy === 'balanced'
                    ? 'border-[#0F2D2E] bg-[#0F2D2E] text-white shadow-sm'
                    : 'border-[#0F2D2E]/15 bg-white text-[#1A1A1A] hover:border-[#A68B5B]'
                }`}
              >
                <div className="font-semibold">Balanced</div>
                <div className={`text-[10px] mt-0.5 ${strategy === 'balanced' ? 'text-white/80' : 'text-[#6A6864]'}`}>
                  Equities + Hybrid + Debt
                </div>
              </button>

              <button
                type="button"
                onClick={() => setStrategy('growth')}
                className={`p-3 rounded-lg text-left border text-xs sm:text-sm transition-all cursor-pointer ${
                  strategy === 'growth'
                    ? 'border-[#0F2D2E] bg-[#0F2D2E] text-white shadow-sm'
                    : 'border-[#0F2D2E]/15 bg-white text-[#1A1A1A] hover:border-[#A68B5B]'
                }`}
              >
                <div className="font-semibold">Growth Oriented</div>
                <div className={`text-[10px] mt-0.5 ${strategy === 'growth' ? 'text-white/80' : 'text-[#6A6864]'}`}>
                  PMS / AIF + Equity
                </div>
              </button>
            </div>
          </div>

          {/* Initial Corpus Slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-[#0F2D2E]/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1A1A1A] sans-ui uppercase tracking-wider">Initial Portfolio / Corpus</span>
              <span className="serif-display font-medium text-base text-[#0F2D2E]">
                {formatINR(initialCorpus)}
              </span>
            </div>
            <input
              type="range"
              min={1000000}
              max={100000000}
              step={1000000}
              value={initialCorpus}
              onChange={(e) => setInitialCorpus(Number(e.target.value))}
              className="w-full h-1.5 bg-[#EAE5DC] rounded-lg appearance-none cursor-pointer accent-[#0F2D2E]"
            />
            <div className="flex justify-between text-[10px] text-[#6A6864]">
              <span>₹10 Lakhs</span>
              <span>₹5 Crores</span>
              <span>₹10 Crores</span>
            </div>
          </div>

          {/* Monthly Allocation Slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-[#0F2D2E]/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1A1A1A] sans-ui uppercase tracking-wider">Monthly Systematic Addition</span>
              <span className="serif-display font-medium text-base text-[#0F2D2E]">
                {formatINR(monthlyContribution)} / mo
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1000000}
              step={25000}
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-1.5 bg-[#EAE5DC] rounded-lg appearance-none cursor-pointer accent-[#0F2D2E]"
            />
            <div className="flex justify-between text-[10px] text-[#6A6864]">
              <span>₹0</span>
              <span>₹5 Lakhs/mo</span>
              <span>₹10 Lakhs/mo</span>
            </div>
          </div>

          {/* Horizon Slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-[#0F2D2E]/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1A1A1A] sans-ui uppercase tracking-wider">Time Horizon</span>
              <span className="serif-display font-medium text-base text-[#0F2D2E]">
                {years} Years {years >= 20 ? '• Intergenerational' : ''}
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-[#EAE5DC] rounded-lg appearance-none cursor-pointer accent-[#0F2D2E]"
            />
            <div className="flex justify-between text-[10px] text-[#6A6864]">
              <span>3 Years (Medium)</span>
              <span>15 Years (Long)</span>
              <span>30 Years (Legacy)</span>
            </div>
          </div>
        </div>

        {/* Output Column (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0F2D2E] text-white rounded-xl p-6 sm:p-7 border border-[#0F2D2E] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A68B5B] sans-ui">
                Projected Total Wealth Value
              </span>
              <div className="serif-display text-3xl sm:text-4xl font-normal text-white mt-1">
                {formatINR(results.totalProjected)}
              </div>
              <div className="text-xs text-[#B3C4BF] mt-1 font-light">
                Total Contributed: <strong className="text-white font-medium">{formatINR(results.totalInvested)}</strong>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#B3C4BF]">Estimated Compounding:</span>
                <span className="font-semibold text-[#A68B5B]">{formatINR(results.wealthCreated)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#B3C4BF]">Inflation-Adjusted Value:</span>
                <span className="font-semibold text-white">{formatINR(results.realPurchasingPower)}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10">
                <span className="text-[#B3C4BF] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A68B5B]" />
                  Protection Buffer:
                </span>
                <span className="font-semibold text-[#A68B5B]">{formatINR(results.suggestedProtection)}</span>
              </div>
            </div>

            <div className="text-[10px] text-white/60 flex items-start gap-1.5 leading-snug">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#A68B5B]" />
              <span>
                Simulations are strictly illustrative and demonstrate mathematical compounding ({returnRates[strategy]}% p.a. assumed). Not a guarantee of returns.
              </span>
            </div>
          </div>

          <button
            onClick={onStartConversation}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#A68B5B] hover:bg-[#B89D6D] text-[#0F2D2E] text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer"
          >
            <span>Discuss Custom Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
