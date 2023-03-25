import { useId } from 'react'

import { Portal } from '@/components/Portal'
import { useMediaQuery } from '@/hooks/useMedia'
import { Backdrop } from '@/shared/Backdrop'
import { device } from '@/styles/Breakpoints'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import styled, { css } from 'styled-components'

const PopupBox = styled(motion.div)<{ isDesktop: boolean }>`
  position: fixed;
  bottom: ${({ isDesktop }) => (isDesktop ? '50%' : 0)};
  left: 50%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.7);
  background: #fff;
  z-index: 101;
  transform: translateX(-50%);
  min-width: 300px;

  ${({ isDesktop }) =>
    !isDesktop &&
    css`
      &::before {
        content: '';
        display: block;
        width: 80px;
        height: 10px;
        background: #e0e0e0;
        border-radius: 30px;
        margin: -15px auto 20px;
      }
    `}

  @media ${device.xs} {
    min-width: 400px;
  }
`

const popupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 200,
    x: '-50%',
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 },
    y: 0,
    x: '-50%',
  },
}

interface PopupProps {
  close: () => void
  children: React.ReactNode
  visible: boolean
}

export const Popup = ({ close, children, visible }: PopupProps) => {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const id = useId()
  return (
    <Portal id={id}>
      <AnimatePresence>
        {visible ? (
          <>
            <Backdrop close={close} />
            <PopupBox
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              isDesktop={isDesktop}
            >
              {children}
            </PopupBox>
          </>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}
