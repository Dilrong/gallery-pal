'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { menuConfig } from '@/lib/config/menu'
import Image from 'next/image'

const MainNav = () => {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/images/icons/logo.svg"
          alt="Hyper Stellar"
          width={32}
          height={32}
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {menuConfig.mainNav.map((nav, index) => (
          <Link
            key={index}
            href={`${nav.href}`}
            className={cn(
              'hover:text-foreground/80 transition-colors',
              pathname === nav.href ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default MainNav
