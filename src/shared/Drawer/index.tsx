import { Backdrop } from '@/shared/Backdrop'
import styled from 'styled-components'

export const DrawerMenu = styled.div`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  z-index: 100;
  padding: 1rem;
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.2);
`

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
      <DrawerMenu style={{ [direction]: 0 }}>{children}</DrawerMenu>
    </>
  )
}
