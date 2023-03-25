import { Variants, motion } from 'framer-motion'
import styled from 'styled-components'

const BackDropBox = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  backdrop-filter: blur(5px);
`

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

interface BackdropProps {
  close: () => void
}

export const Backdrop = ({ close }: BackdropProps) => {
  return (
    <BackDropBox
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={close}
    />
  )
}
