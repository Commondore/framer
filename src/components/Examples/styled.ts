import { device } from '@/styles/Breakpoints'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Box = styled(motion.div)<{ center?: boolean }>`
  background: #faf9f9;
  padding: 3rem;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.7);

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`

export const Title = styled(motion.h1)`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
`

export const List = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 2rem;
  background: #ccc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListItem = styled(motion.li)`
  cursor: pointer;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`

export const CustomTitle = styled.h2`
  font-size: 30px;
  color: ${({ color = 'tomato' }) => color};
  background: ${({ theme }) => theme.colors.success};

  @media ${device.md} {
    background: #000;
  }
`
