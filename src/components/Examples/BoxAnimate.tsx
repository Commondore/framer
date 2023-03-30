import { Box } from '@/components/Examples/styled'

interface BoxAnimateProps {
  children: React.ReactNode
  center?: boolean
}

export const BoxAnimate = ({ children, center }: BoxAnimateProps) => {
  return (
    <Box
      center={center}
      animate={{ x: 0 }}
      initial={{ x: '100vw' }}
      exit={{ x: '-100vw' }}
    >
      {children}
    </Box>
  )
}
