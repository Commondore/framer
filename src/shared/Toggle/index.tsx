import { motion } from 'framer-motion'
import styled from 'styled-components'

const ToggleWrap = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 100px;
  padding: 5px;
  display: inline-flex;
  cursor: pointer;

  &.on {
    background-color: #22cc88;
    justify-content: flex-end;
  }

  &.off {
    background-color: #dddddd;
    justify-content: flex-start;
  }
`

const ToggleCircle = styled(motion.div)`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 100%;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
`

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

interface ToggleProps {
  isOn: boolean
  click: () => void
}

export const Toggle = ({ isOn, click }: ToggleProps) => {
  const className = `${isOn ? 'on' : 'off'}`
  return (
    <ToggleWrap onClick={click} className={className}>
      <ToggleCircle layout transition={spring} />
    </ToggleWrap>
  )
}
