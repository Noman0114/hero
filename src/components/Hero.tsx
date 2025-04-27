import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
        {title}
      </h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={primaryButtonLink} className="btn-primary text-center">
          {primaryButtonText}
        </Link>
        <Link href={secondaryButtonLink} className="btn-secondary text-center">
          {secondaryButtonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero; 