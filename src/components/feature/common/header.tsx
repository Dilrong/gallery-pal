'use client'

import MainNav from './main-nav'
import MobileNav from './mobile-nav'

const Header = () => {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end"></div>
        <div className="flex space-x-2">
          <ModeToggle />
          <WalletConnect />
        </div>
      </div>
    </header>
  )
}

export default Header
