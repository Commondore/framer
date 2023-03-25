import { useState } from 'react'

import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { Title } from '@/components/Examples/styled'
import { Button } from '@/shared/Button'
import { Popup } from '@/shared/Popup'

export const Example2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <BoxAnimate>
      <Title>Пример № 2</Title>
      <Button click={() => setVisible(true)} color={'success'}>
        Показать Popup
      </Button>
      <Popup visible={visible} close={() => setVisible(false)}>
        <Title>Пример № 2</Title>
      </Popup>
    </BoxAnimate>
  )
}
