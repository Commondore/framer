import { useState } from 'react'

import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { Title } from '@/components/Examples/styled'
import { Variants, motion } from 'framer-motion'

import styles from './style.module.scss'

const variants: Variants = {
  start: (custom: number) => ({
    x: 300,
    transition: {
      delay: custom,
    },
  }),
}

export const Example1 = () => {
  const [posX, setPosX] = useState(0)

  const togglePost = () => {
    if (posX === 0) {
      setPosX(200)
    } else {
      setPosX(0)
    }
  }

  return (
    <BoxAnimate>
      <Title>Пример № 1</Title>
      <motion.div
        onClick={togglePost}
        animate={{
          x: posX,
        }}
        className={styles.box}
      />

      {Array.from(Array(5), (_, index) => {
        return (
          <motion.div
            variants={variants}
            custom={index / 2}
            animate="start"
            className={styles.box}
          />
        )
      })}
    </BoxAnimate>
  )
}
