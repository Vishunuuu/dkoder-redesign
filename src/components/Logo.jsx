import { brand } from '../data/content'

export function LogoMark({ className = 'size-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 20h22c13 0 22 8 22 21s-9 21-22 21H10z" fill="#FFD21F" />
      <path
        d="M26 35l-6 6 6 6M40 35l6 6-6 6M34 32l-4 18"
        stroke="#07090d"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M3 13l20-8 20 8-20 8z" fill="#07090d" stroke="#FFD21F" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M9 17v9" stroke="#FFD21F" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="9" cy="29" r="2.6" fill="#FFD21F" />
    </svg>
  )
}

export default function Logo({ showMotto = true }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-none">
        <span className="block text-xl font-black tracking-tight text-white">{brand.name}</span>
        {showMotto && <span className="mt-1 block text-[8px] font-medium tracking-[0.3em] text-gray-400">{brand.motto}</span>}
      </span>
    </span>
  )
}
