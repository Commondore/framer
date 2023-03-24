import { motion } from 'framer-motion'
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

interface BackdropProps {
  close: () => void
}

export const Backdrop = ({ close }: BackdropProps) => {
  return <BackDropBox onClick={close} />
}
