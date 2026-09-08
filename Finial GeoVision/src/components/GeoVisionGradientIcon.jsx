import React from 'react';

export default function GeoVisionGradientIcon({ src, size = 18, alt = 'icon', style = {}, className = '' }) {
  return (
    <span
      className={`geovision-gradient-icon-wrapper ${className}`}
      title={alt}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        flexShrink: 0,
        transition: 'background 0.25s ease, transform 0.2s ease',
        ...style
      }}
    />
  );
}
