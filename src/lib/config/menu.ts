import { MainNavItem } from '@/lib/interface/nav.interface'

interface MenuConfig {
    mainNav: MainNavItem[]
}

export const menuConfig: MenuConfig = {
    mainNav: [{ title: 'how it works', href: '/docs/how-it-works' }],
}