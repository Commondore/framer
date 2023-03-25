import { useState } from 'react'

import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { DragItem } from '@/components/Examples/DragItem'
import { List, Title } from '@/components/Examples/styled'
import { motion } from 'framer-motion'

export const Example4 = () => {
  const [list, setList] = useState([
    { title: 'Element 1', id: 1 },
    { title: 'Element 2', id: 2 },
    { title: 'Element 3', id: 3 },
  ])

  const onDragHandler = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <BoxAnimate>
      <Title layout>Анимации при перетаскивании</Title>

      <List layout>
        {!!list.length ? (
          list.map((item) => {
            return (
              <DragItem
                key={item.id}
                onDrag={() => onDragHandler(item.id)}
                title={item.title}
              />
            )
          })
        ) : (
          <motion.li
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center' }}
          >
            <h3>Пусто</h3>
          </motion.li>
        )}
      </List>
    </BoxAnimate>
  )
}
