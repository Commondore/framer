import { useEffect } from 'react'

import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { List, ListItem, Title } from '@/components/Examples/styled'
import { stagger, useAnimate } from 'framer-motion'

export const Example3 = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 1 })
    animate('li', { x: 0 }, { delay: stagger(0.3) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BoxAnimate>
      <Title>Пример № 3</Title>

      <List ref={scope} initial={{ opacity: 0 }}>
        <ListItem initial={{ x: '100%' }}>Element 1</ListItem>
        <ListItem initial={{ x: '100%' }}>Element 1</ListItem>
        <ListItem initial={{ x: '100%' }}>Element 1</ListItem>
        <ListItem initial={{ x: '100%' }}>Element 1</ListItem>
        <ListItem initial={{ x: '100%' }}>Element 1</ListItem>
      </List>
    </BoxAnimate>
  )
}
