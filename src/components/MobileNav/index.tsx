import { useState } from 'react'
import { VscChromeClose, VscMenu } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'

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
  hidden: {
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  visible: {
    opacity: 1,
  },
}

const linkVariant: Variants = {
  hidden: {
    x: 400,
  },
  visible: {
    x: 0,
  },
}

export const MobileNav = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <MobileWrap>
      <ToggleButton onClick={() => setIsExpanded(true)}>
        {isExpanded ? <VscChromeClose /> : <VscMenu />}
      </ToggleButton>

      <AnimatePresence>
        {isExpanded && (
          <Drawer direction="right" close={() => setIsExpanded(false)}>
            <h3>hello</h3>
            <MobNavList
              variants={navVariants}
              animate="visible"
              initial="hidden"
            >
              {navData.map((item) => (
                <MobNavLink
                  variants={linkVariant}
                  key={item.id}
                  as={NavLink}
                  to={item.url}
                  className={({ isActive }) => (isActive ? 'active' : '')}
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
