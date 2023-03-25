import { useState } from 'react'
import { VscChromeClose, VscMenu } from 'react-icons/vsc'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  MobNavLink,
  MobNavList,
  MobileWrap,
  ToggleButton,
} from '@/components/MobileNav/styled'
import { navData } from '@/components/Nav/navData'
import { Drawer } from '@/shared/Drawer'
import { AnimatePresence, Variants } from 'framer-motion'

const navVariants: Variants = {
  visible: {
    rotateY: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
  hidden: {
    perspective: 300,
    rotateY: 90,
  },
}

const linkVariant: Variants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const MobileNav = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const onNavigate = (url: string) => {
    navigate(url)
    setIsExpanded(false)
  }
  return (
    <MobileWrap>
      <ToggleButton onClick={() => setIsExpanded(true)}>
        {isExpanded ? <VscChromeClose /> : <VscMenu />}
      </ToggleButton>

      <AnimatePresence>
        {isExpanded && (
          <Drawer direction="right" close={() => setIsExpanded(false)}>
            <MobNavList
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {navData.map((item) => (
                <MobNavLink
                  variants={linkVariant}
                  key={item.id}
                  onClick={() => onNavigate(item.url)}
                  className={pathname === item.url ? 'active' : ''}
                >
                  {item.title}
                </MobNavLink>
              ))}
            </MobNavList>
          </Drawer>
        )}
      </AnimatePresence>
    </MobileWrap>
  )
}
