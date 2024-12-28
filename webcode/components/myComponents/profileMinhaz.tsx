'use client'
import React from 'react';
import Image from 'next/image';

interface OddlyShapedProfilePhotoProps {
  imageSrc: string;
  altText: string;
  size?: number;
}

const OddlyShapedProfilePhoto: React.FC<OddlyShapedProfilePhotoProps> = ({ 
  imageSrc, 
  altText, 
  size = 200 
}) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="absolute top-0 left-0"
      >
        <defs>
          <clipPath id="oddlyShapedClip">
            <path d="M100 0 C130 20 180 50 190 100 C200 150 150 180 100 190 C50 200 20 150 10 100 C0 50 70 20 100 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="relative w-full h-full overflow-hidden" style={{ clipPath: 'url(#oddlyShapedClip)' }}>
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="rounded-none"
        />
      </div>
    </div>
  );
};

export default OddlyShapedProfilePhoto;

