import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileWrap = styled.div`
  position: relative;
`

export const ToggleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }
`

export const MobNavList = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 1rem;
  height: 100%;
  border-radius: 10px;
  text-align: center;
`

export const MobNavLink = styled(motion.a)`
  padding: 1rem 0;
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`
