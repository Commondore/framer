import { Box, Title } from '@/components/Examples/styled'

import styles from './style.module.scss'

export const Example1 = () => {
  return (
    <Box>
      <Title>Пример № 1</Title>
      <div className={styles.box} />
    </Box>
  )
}
