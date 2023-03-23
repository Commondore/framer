import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const NavWrap = styled.nav`
  display: flex;
  gap: 1rem;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Nav = () => {
  return (
    <NavWrap>
      <Link as={NavLink} to="/">
        Home
      </Link>
    </NavWrap>
  )
}
