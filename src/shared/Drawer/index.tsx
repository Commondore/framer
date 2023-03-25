import { Backdrop } from '@/shared/Backdrop'
import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

export const DrawerMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  z-index: 100;
  padding: 1rem;
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.2);
`

const drawMenuVariant: Variants = {
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hidden: {
    x: '100%',
  },
}

interface DrawerProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  close: () => void
}

export const Drawer = ({
  children,
  direction = 'left',
  close,
}: DrawerProps) => {
  return (
    <>
      <Backdrop close={close} />
      <DrawerMenu
        // variants={drawMenuVariant}
        initial={{
          x: '100%',
        }}
        animate={{
          x: 0,
          transition: {
            type: 'tween',
            ease: 'easeIn',
          },
        }}
        exit={{
          x: '100%',
        }}
        style={{ [direction]: 0 }}
      >
        {children}
      </DrawerMenu>
    </>
  )
}
