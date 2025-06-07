'use client';

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Monitor Base */}
        <rect
          x="150"
          y="200"
          width="500"
          height="350"
          rx="20"
          fill="#1a123b"
          className="animate-pulse"
        />
        <rect
          x="170"
          y="220"
          width="460"
          height="310"
          rx="10"
          fill="#0a0225"
        />

        {/* Código animado dentro do monitor */}
        <g className="animate-blink">
          <rect x="200" y="250" width="200" height="20" fill="#8A6FE8" opacity="0.5" />
          <rect x="200" y="290" width="300" height="20" fill="#4A3AFF" opacity="0.3" />
          <rect x="200" y="330" width="250" height="20" fill="#8A6FE8" opacity="0.5" />
          <rect x="200" y="370" width="280" height="20" fill="#4A3AFF" opacity="0.3" />
          <rect x="200" y="410" width="180" height="20" fill="#8A6FE8" opacity="0.5" />
          <rect x="200" y="450" width="220" height="20" fill="#4A3AFF" opacity="0.3" />
        </g>

        {/* Base do Monitor */}
        <path
          d="M300 550 L500 550 L460 600 L340 600 Z"
          fill="#1a123b"
        />

        {/* Engrenagem grande central */}
        <g className="animate-spin-slow" style={{ transformOrigin: '600px 400px' }}>
          <path
            d="M650 400c0-27.614-22.386-50-50-50s-50 22.386-50 50 22.386 50 50 50 50-22.386 50-50zm-80 0c0-16.569 13.431-30 30-30s30 13.431 30 30-13.431 30-30 30-30-13.431-30-30z"
            fill="#8A6FE8"
          />
          <path
            d="M600 320v30m0 100v30m80-80h-30m-100 0h-30"
            stroke="#8A6FE8"
            strokeWidth="12"
            className="animate-pulse"
          />
        </g>

        {/* Engrenagem pequena superior */}
        <g className="animate-spin-reverse" style={{ transformOrigin: '500px 250px' }}>
          <path
            d="M530 250c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm-45 0c0-8.284 6.716-15 15-15s15 6.716 15 15-6.716 15-15 15-15-6.716-15-15z"
            fill="#4A3AFF"
          />
          <path
            d="M500 210v15m0 50v15m40-40h-15m-50 0h-15"
            stroke="#4A3AFF"
            strokeWidth="6"
          />
        </g>

        {/* Partículas flutuantes */}
        <g className="animate-float">
          <circle cx="250" cy="200" r="8" fill="#8A6FE8" opacity="0.5" />
          <circle cx="650" cy="280" r="6" fill="#4A3AFF" opacity="0.3" />
          <circle cx="450" cy="150" r="10" fill="#8A6FE8" opacity="0.4" />
          <circle cx="700" cy="450" r="8" fill="#4A3AFF" opacity="0.3" />
          <circle cx="200" cy="500" r="12" fill="#8A6FE8" opacity="0.5" />
          <circle cx="350" cy="600" r="8" fill="#4A3AFF" opacity="0.4" />
        </g>

        {/* Linhas de conexão */}
        <g className="animate-pulse">
          <path
            d="M250 150 Q400 50 550 150"
            stroke="#8A6FE8"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M150 400 Q250 500 150 600"
            stroke="#4A3AFF"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M650 200 Q700 300 650 400"
            stroke="#8A6FE8"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
        </g>

        {/* Símbolos de código */}
        <g className="animate-float">
          <text x="150" y="180" fill="#8A6FE8" className="text-2xl" opacity="0.5">{`{}`}</text>
          <text x="650" y="480" fill="#4A3AFF" className="text-2xl" opacity="0.3">{`</>`}</text>
          <text x="700" y="280" fill="#8A6FE8" className="text-2xl" opacity="0.4">{`()`}</text>
        </g>

        {/* Efeito de brilho nas engrenagens */}
        <defs>
          <radialGradient id="gearGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#8A6FE8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8A6FE8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="400" r="70" fill="url(#gearGlow)" className="animate-pulse" />
        <circle cx="500" cy="250" r="40" fill="url(#gearGlow)" className="animate-pulse" />
      </svg>
    </div>
  );
} 