import type { JSX } from 'react'
import './App.css'
import logo from './assets/img/weblogo.png'
const navItems = [
  { label: 'Case Opening', active: true },
  { label: 'Inventory' },
  { label: 'Free', highlight: true },
]
const navIcons: Record<string, JSX.Element> = {
  'Case Opening': (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 9V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
      <rect x="4.5" y="9" width="15" height="9.5" rx="2" />
      <path d="M4.5 12h15" />
      <path d="M11 12v1.5a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1V12" />
    </svg>
  ),
  Inventory: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7h14l-2 5H7z" />
      <path d="M7 12v7h10v-7" />
      <path d="M9.5 15.5h5" />
    </svg>
  ),
  Free: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 4.5 1.88 3.81 4.2.61-3.04 2.96.72 4.18L12 14.77l-3.76 1.99.72-4.18-3.04-2.96 4.2-.61z" />
    </svg>
  ),
}
const getNavIcon = (label: string) =>
  navIcons[label] ?? (
    <span className="text-xs font-semibold">{label.slice(0, 1).toUpperCase()}</span>
  )
const socialItems = ['Telegram', 'Facebook', 'YouTube', 'Discord', 'TikTok']
const socialIcons: Record<string, JSX.Element> = {
  Telegram: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.6 4.2 3.7 11.1l5.2 1.6 1.9 6 3.2-3.4 4.2 3.2z" fill="currentColor" stroke="none" />
      <path d="M9 12.9 20.6 4.2" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14.5 7H16V4.5h-1.5a4.5 4.5 0 0 0-4.5 4.5V11H8v2.5h2v6h3v-6h2.2l.5-2.5H13V9a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  YouTube: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="6.5" width="17" height="11" rx="3.2" />
      <path d="m11 10.5 4 2-4 2z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Discord: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 7.2a8.8 8.8 0 0 1 4-1.7l.8 1.5a10 10 0 0 1 1.4-.2 10 10 0 0 1 1.4.2l.8-1.5a8.8 8.8 0 0 1 4 1.7c1 2.6 1.3 5.2.9 7.4a4.7 4.7 0 0 1-1.8 2.9 7.5 7.5 0 0 1-3 .9l-1.2-1.7a4.5 4.5 0 0 1-1.6.3 4.5 4.5 0 0 1-1.6-.3l-1.2 1.7a7.5 7.5 0 0 1-3-.9 4.7 4.7 0 0 1-1.8-2.9c-.4-2.2-.1-4.8.9-7.4Z" />
      <path d="M9.3 13.3h0" />
      <path d="M14.7 13.3h0" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M15 5.5a4.3 4.3 0 0 0 3.5 1.5v2.8a7.1 7.1 0 0 1-3.5-.9v6.3a4.4 4.4 0 1 1-4.4-4.4 4.2 4.2 0 0 1 1.4.2V6h3Z" />
    </svg>
  ),
}
const getSocialIcon = (platform: string) =>
  socialIcons[platform] ?? (
    <span className="text-xs font-semibold">{platform.slice(0, 1).toUpperCase()}</span>
  )
const notificationItems = ['Notifications', 'Sound']
function App() {
  return (
    <div className="min-h-screen bg-[#00000] text-white">
      <header className="flex justify-center pt-6">
        <nav className="flex w-full max-w-6xl items-center justify-between rounded-[18px] border border-[#181C28] bg-[#13151D] px-6 py-4 shadow-[0_20px_45px_-25px_rgba(5,13,32,0.75)]">
          <div className="flex flex-1 items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#0C0F19]">
                <img
                  src={logo}
                  alt="Stand Cases logo"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-recons text-white">
                  Stand
                </p>
                <p className="text-xs font-recons text-white">
                  Cases
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`group flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-[#7D8091] transition ${
                    item.active ? 'border-[#6A48FF] bg-[#0F1120] text-white' : 'bg-[#0D101A]'
                  } ${
                    item.highlight ? 'bg-gradient-to-br from-[#1F2836] to-[#131921]' : ''
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[12px] bg-[#0F1120] text-xs text-[#7D8091]">
                    {getNavIcon(item.label)}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-[14px] bg-[#0D101A] px-3 py-2">
              {socialItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#11141F] text-[#7D8091] transition hover:bg-[#151927] hover:text-[#A5ACBE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6A48FF]/60"
                  >
                    {getSocialIcon(item)}
                  </button>
                  {index === socialItems.length - 2 ? (
                    <span className="mx-2 h-6 w-px bg-[#232739]" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-[14px] bg-[#0D101A] px-4 py-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-[#121623] px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-[#F6F4F9]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#151927] text-xs text-[#7D8091]">
                  {/* TODO: place FAQ icon */}
                </span>
                FAQ
              </button>
              <div className="flex items-center gap-3 rounded-full bg-[#121623] px-4 py-2 text-sm text-[#F6F4F9]">
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#151927] text-xs text-[#F3B451]">
                  {/* TODO: place coin icon */}
                </span>
                <p className="font-semibold">4,700</p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#23C76A] to-[#28E17E] text-[#0D131D]"
              >
                {/* TODO: place wallet icon */}
              </button>
            </div>
            <div className="flex items-center gap-1 rounded-[14px] bg-[#0D101A] px-2 py-2">
              {notificationItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#121623] text-[#7D8091] transition hover:text-[#A5ACBE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6A48FF]/60"
                  >
                    {/* TODO: place {item} icon */}
                  </button>
                  {index === 0 ? <span className="mx-2 h-6 w-px bg-[#232739]" /> : null}
                </div>
              ))}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#121623] text-[#7D8091] transition hover:text-[#A5ACBE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6A48FF]/60"
              >
                {/* TODO: place profile icon */}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default App
