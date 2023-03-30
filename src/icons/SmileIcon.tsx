import { Variants, motion } from 'framer-motion'

const eyesVariants: Variants = {
  hidden: {
    fill: '#2FA733',
    stroke: '#2FA733',
  },
  visible: {
    fill: '#D12626',
    stroke: '#D12626',
    transition: { duration: 1 },
  },
}

const strokeVariants: Variants = {
  hidden: {
    stroke: '#2FA733',
  },
  visible: { stroke: '#D12626', transition: { duration: 1 } },
}

const smileVariants: Variants = {
  hidden: {
    stroke: '#2FA733',
  },
  visible: {
    d: 'M 220,210 Q 140,145 60,210',
    stroke: '#D12626',
    transition: {
      duration: 1,
    },
  },
}

interface SmileIconProps {
  isSmile: boolean
}

export const SmileIcon = ({ isSmile }: SmileIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="279"
      height="279"
      fill="none"
      stroke="#2FA733"
    >
      <motion.circle
        variants={strokeVariants}
        initial="hidden"
        animate={isSmile ? 'hidden' : 'visible'}
        cx="139"
        cy="140"
        r="126"
        stroke="#2FA733"
        strokeWidth="4"
      />
      <motion.circle
        cx="89"
        cy="96"
        r="20"
        fill="#2FA733"
        variants={eyesVariants}
        initial="hidden"
        animate={isSmile ? 'hidden' : 'visible'}
      />
      <motion.path
        style={{
          strokeWidth: 12,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
        variants={smileVariants}
        initial="hidden"
        d="M 220,200 Q 140,275 60,200"
        animate={isSmile ? 'hidden' : 'visible'}
      />
      <motion.circle
        variants={eyesVariants}
        initial="hidden"
        animate={isSmile ? 'hidden' : 'visible'}
        cx="190"
        cy="96"
        r="20"
        fill="#2FA733"
      />
    </svg>
  )
}
