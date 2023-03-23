import { getRandomRgb } from '@/helpers'
import styled from 'styled-components'

export const LogoElem = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 1px rgba(0, 0, 0, 0.8);
`

interface LogoProps {
  children: string
}

export const Logo = ({ children }: LogoProps) => {
  return (
    <LogoElem>
      {children.split('').map((symbol, index) => (
        <span key={index} style={{ color: getRandomRgb() }}>
          {symbol}
        </span>
      ))}
    </LogoElem>
  )
}
