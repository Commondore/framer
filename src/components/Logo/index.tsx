import { getRandomRgb } from '@/helpers'
import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

export const LogoElem = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 1px rgba(0, 0, 0, 0.8);
`

interface LogoProps {
  children: string
}

const letterVariants: Variants = {
  hidden: { y: -3 },
  visible: (delay: number) => ({
    y: 0,
    transition: {
      delay: delay / 4,
      repeatType: 'mirror',
      repeat: Infinity,
      duration: 0.2,
    },
  }),
}

export const Logo = ({ children }: LogoProps) => {
  return (
    <LogoElem>
      {children.split('').map((symbol, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          custom={index}
          initial="hidden"
          animate="visible"
          style={{ color: getRandomRgb(), display: 'inline-flex' }}
        >
          {symbol}
        </motion.span>
      ))}
    </LogoElem>
  )
}
