import { NavLink } from 'react-router-dom'

import { navData } from '@/components/Nav/navData'
import styled from 'styled-components'

const NavWrap = styled.nav`
  display: flex;
  gap: 1rem;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`

export const Nav = () => {
  return (
    <NavWrap>
      {navData.map((item) => (
        <Link
          key={item.id}
          as={NavLink}
          to={item.url}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
        </Link>
      ))}
    </NavWrap>
  )
}
