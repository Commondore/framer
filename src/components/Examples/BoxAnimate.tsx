import { Box } from '@/components/Examples/styled'

interface BoxAnimateProps {
  children: React.ReactNode
}

export const BoxAnimate = ({ children }: BoxAnimateProps) => {
  return (
    <Box animate={{ x: 0 }} initial={{ x: '100vw' }} exit={{ x: '-100vw' }}>
      {children}
    </Box>
  )
}
