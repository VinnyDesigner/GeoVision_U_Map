import React from 'react';

export default function AnimatedLetterO({ className = '', style = {} }) {
  return (
    <span
      className={`animated-letter-o-wrapper ${className}`}
      style={style}
      aria-label="o"
    >
      <svg
        viewBox="0 0 100 100"
        className="select-none animated-letter-o-svg"
        style={{ width: '100%', height: '100%', overflow: 'visible', display: 'block' }}
      >
        <defs>
          <linearGradient id="pinGradHero" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7da1c4" />
            <stop offset="50%" stopColor="#215a9e" />
            <stop offset="100%" stopColor="#063360" />
          </linearGradient>
        </defs>
        <g className="ripples-group">
          <ellipse className="ring-p-1" cx="50" cy="100" rx="40" ry="10" fill="none" stroke="#7da1c4" strokeWidth="2.5" />
          <ellipse className="ring-p-2" cx="50" cy="100" rx="40" ry="10" fill="none" stroke="#7da1c4" strokeWidth="2.5" />
        </g>
        <g className="arrow-orbit-back">
          <path d="M50,26 L62,48 L50,43 L38,48 Z" fill="#215a9e" />
        </g>
        <g>
          <path
            className="outer-anim"
            d="M50,95 C25.15,95 5,74.85 5,50 C5,25.15 25.15,5 50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 Z"
            fill="url(#pinGradHero)"
          />
          <circle className="inner-anim" cx="50" cy="50" r="18" fill="#FFFFFF" />
        </g>
        <g className="arrow-orbit-front">
          <path d="M50,26 L62,48 L50,43 L38,48 Z" fill="#215a9e" />
        </g>
      </svg>
    </span>
  );
}
