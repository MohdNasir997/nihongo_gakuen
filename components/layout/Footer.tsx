import Link from 'next/link'
import { Globe, Podcast, Film,  Languages } from 'lucide-react'

// Design tokens for consistency and maintainability
const FOOTER_CONFIG = {
  maxWidth: 'max-w-[1280px]',
  gridGap: 'gap-16',
  sectionGap: 'gap-8',
  bottomMargin: 'mb-20',
  brandColSpan: 'col-span-2',
} as const

// Reusable link data structure for easy maintenance
const FOOTER_LINKS = {
  platform: [
    { label: 'All Courses', href: '/courses' },
    { label: 'Curriculum', href: '/courses' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'For Teams', href: '#' },
  ],
  resources: [
    { label: 'Journal', href: '#' },
    { label: 'Study Sheets', href: '#' },
    { label: 'Guidebooks', href: '#' },
    { label: 'JLPT Guide', href: '#' },
  ],
  support: [
    { label: 'Help Center', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
} as const

// Reusable footer section component
function FooterSection({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-bold text-[#1a1c1e] dark:text-white text-sm uppercase tracking-widest">
        {title}
      </h4>
      <nav className="flex flex-col gap-4" aria-label={`${title} links`}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-slate-500 text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-background-light dark:bg-[#0b111a] border-t border-[#eeeae0] dark:border-slate-800 pt-24 pb-12 px-6 lg:px-40">
      <div className={`${FOOTER_CONFIG.maxWidth} mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ${FOOTER_CONFIG.gridGap} ${FOOTER_CONFIG.bottomMargin}`}>
        {/* Brand Section */}
        <div className={`${FOOTER_CONFIG.brandColSpan} flex flex-col ${FOOTER_CONFIG.sectionGap}`}>
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-[#1a1c1e] dark:text-white font-serif">
              NihonGo Learn
            </h2>
          </div>
          <p className="text-slate-500 max-w-[320px] leading-relaxed">
            Dedicated to helping global learners master Japanese through beautiful design and mindful instruction.
          </p>
          <div className="flex gap-4">
            <a href="#" className="size-10 rounded-lg bg-[#eeeae0] dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all">
              <Globe className="size-5" />
            </a>
            <a href="#" className="size-10 rounded-lg bg-[#eeeae0] dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all">
              <Podcast className="size-5" />
            </a>
            <a href="#" className="size-10 rounded-lg bg-[#eeeae0] dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-all">
              <Film className="size-5" />
            </a>
          </div>
        </div>

        {/* Platform Links */}
        <FooterSection title="Platform" links={FOOTER_LINKS.platform} />

        {/* Resources Links */}
        <FooterSection title="Resources" links={FOOTER_LINKS.resources} />

        {/* Support Links */}
        <FooterSection title="Support" links={FOOTER_LINKS.support} />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#eeeae0] dark:border-slate-800 pt-10">
        <p className="text-slate-400 text-xs tracking-wide">
          © 2024 NihonGo Learn. Dedicated to excellence in language education. Made in Tokyo.
        </p>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <span className="hover:text-primary cursor-pointer transition-colors">English (US)</span>
          <Languages className="size-4" />
        </div>
      </div>
    </footer>
  )
}
