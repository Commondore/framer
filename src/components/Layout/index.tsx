import { Header, Main } from '@/components/Layout/styled'
import { Logo } from '@/components/Logo'
import { MobileNav } from '@/components/MobileNav'
import { Nav } from '@/components/Nav'
import { useMediaQuery } from '@/hooks/useMedia'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  return (
    <>
      <Header>
        <Logo>Animations</Logo>
        {isDesktop ? <Nav /> : <MobileNav />}
      </Header>
      <Main>{children}</Main>
    </>
  )
}
