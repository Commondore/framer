import { PanInfo, useMotionValue, useTransform } from 'framer-motion'

import { ListItem } from './styled'

interface DragItemProps {
  title: string
  onDrag: () => void
}

export const DragItem = ({ title, onDrag }: DragItemProps) => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  const dragHandler = (info: PanInfo) => {
    if (Math.abs(info.offset.x) >= 200) {
      onDrag()
    }
  }
  return (
    <ListItem
      layout
      exit={{ opacity: 0 }}
      drag={'x'}
      style={{ x, opacity }}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragElastic={0.5}
      onDragEnd={(event, info) => dragHandler(info)}
    >
      {title}
    </ListItem>
  )
}
