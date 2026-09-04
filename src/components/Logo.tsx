import React, { useState } from 'react';
import logoLight from '../assets/images/legacyone_logo.svg';
import logoDark from '../assets/images/legacyone_logo_white.svg';

interface LogoProps {
  variant?: 'light' | 'dark' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const isDark = variant === 'dark';
  const [imgError, setImgError] = useState(false);

  // Height mappings matching the 360x94 aspect ratio (~3.83:1)
  const sizeStyles = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-12 sm:h-16 w-auto',
    lg: 'h-11 sm:h-13 w-auto',
    xl: 'h-18 sm:h-22 w-auto'
  };

  const imageSrc = isDark ? logoDark : logoLight;

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="legacyone-brand-logo">
      {!imgError ? (
        <img
          src={imageSrc}
          alt="LegacyOne Wealth - Create, Grow, Preserve – Legacy"
          className={`${sizeStyles[size]} object-contain transition-transform duration-200`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex flex-col items-start leading-none">
          <div className="serif-display text-2xl font-semibold tracking-tight">
            <span className={isDark ? 'text-[#D4A853]' : 'text-[#B38634]'}>LegacyOne</span>
            <span className={`ml-1.5 font-light ${isDark ? 'text-white' : 'text-[#145939]'}`}>Wealth</span>
          </div>
          {showSubtitle && (
            <span className={`serif-display text-[10px] tracking-[0.14em] mt-1 ${isDark ? 'text-[#D4A853]' : 'text-[#B38634]'}`}>
              Create, Grow, Preserve – Legacy
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export const BrandCrest: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-sm bg-[#0F2D2E] border border-[#0F2D2E]/20 shadow-sm ${className}`}
      style={{ width: size, height: size }}
      id="legacyone-brand-crest"
    >
      <span className="serif-display font-bold text-[#A68B5B] leading-none" style={{ fontSize: size * 0.42 }}>
        L1
      </span>
      <div className="absolute inset-0 rounded-sm border border-white/10 pointer-events-none" />
    </div>
  );
};



