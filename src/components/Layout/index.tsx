import { Header, Main } from '@/components/Layout/styled'
import { Logo } from '@/components/Logo'
import { Nav } from '@/components/Nav'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header>
        <Logo>Animations</Logo>
        <Nav />
      </Header>
      <Main>{children}</Main>
    </>
  )
}
