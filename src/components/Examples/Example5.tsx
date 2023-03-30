import { useState } from 'react'

import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { Title } from '@/components/Examples/styled'
import { SmileIcon } from '@/icons/SmileIcon'
import { Toggle } from '@/shared/Toggle'

export const Example5 = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <BoxAnimate center>
      <Title>Анимация SVG</Title>

      <h3 style={{ marginBottom: '.5rem' }}>
        {isOn ? 'Погрустить' : 'Улыбнуться'}
      </h3>
      <Toggle isOn={isOn} click={() => setIsOn((v) => !v)} />
      <div>
        <SmileIcon isSmile={isOn} />
      </div>
    </BoxAnimate>
  )
}
