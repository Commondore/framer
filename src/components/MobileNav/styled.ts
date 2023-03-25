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
  margin: 1rem 0;
  background: #ccc;
`

export const MobNavLink = styled(motion.a)`
  padding: 1rem 0;
  border-bottom: #ccc 1px solid;
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }
`
