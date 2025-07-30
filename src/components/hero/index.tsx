import React from 'react';
import PixelOwl from '@/components/ui/caracter';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <div className={className}>
      <div className="flex size-full">
        <div style={{ width: '400px', height: '400px' }}>
          <PixelOwl className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
