import React, { useState } from 'react';
import { User } from 'lucide-react';
import vivekPortrait from '../assets/images/vivek-portrait.jpg';
import chetanPortrait from '../assets/images/chetan-portrait.jpg';

interface FounderAvatarProps {
  name: string;
  imageUrl?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FounderAvatar: React.FC<FounderAvatarProps> = ({
  name,
  imageUrl,
  className = '',
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  // Bundled portrait per founder (falls back to any explicit imageUrl prop)
  const isChetan = name.toLowerCase().includes('chetan');
  const isVivek = name.toLowerCase().includes('viveik');

  const defaultCandidates = isChetan
    ? [chetanPortrait, imageUrl]
    : isVivek
    ? [vivekPortrait, imageUrl]
    : [imageUrl];

  const candidatePaths = defaultCandidates.filter(Boolean) as string[];

  const handleImgError = () => {
    if (currentSrcIndex < candidatePaths.length - 1) {
      setCurrentSrcIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const activeSrc = candidatePaths[currentSrcIndex];
  const objectPosition = isChetan ? 'object-[center_25%]' : 'object-[center_top]';

  if (activeSrc && !imageError) {
    return (
      <div className={`overflow-hidden bg-[#0F2D2E]/10 relative ${className}`}>
        <img
          src={activeSrc}
          alt={name}
          onError={handleImgError}
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-300 hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#0F2D2E] to-[#1A4748] p-3 text-center ${className}`}>
      <User className="w-8 h-8 text-[#A68B5B] mb-1 opacity-80" />
      <span className="serif-display font-medium text-sm text-[#A68B5B]">
        {name}
      </span>
      <span className="text-[8px] text-white/70 uppercase tracking-widest sans-ui font-bold mt-0.5">
        Co-Founder & Partner
      </span>
    </div>
  );
};
