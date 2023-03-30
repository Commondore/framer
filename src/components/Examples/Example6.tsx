import { BoxAnimate } from '@/components/Examples/BoxAnimate'
import { Title } from '@/components/Examples/styled'
import { motion } from 'framer-motion'

import styles from './style.module.scss'

export const Example6 = () => {
  return (
    <BoxAnimate>
      <Title>Анимация по скроллу</Title>

      {Array.from(Array(5), (_, index) => {
        return (
          <motion.div
            key={index}
            className={styles.block}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              Блок номер {index + 1}
            </motion.h3>
          </motion.div>
        )
      })}
    </BoxAnimate>
  )
}
