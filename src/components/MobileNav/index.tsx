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

export const MobileNav = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <MobileWrap>
      <ToggleButton onClick={() => setIsExpanded((v) => !v)}>
        {isExpanded ? <VscChromeClose /> : <VscMenu />}
      </ToggleButton>

      {isExpanded && (
        <Drawer direction="right" close={() => setIsExpanded(false)}>
          <h3>hello</h3>
          <MobNavList>
            {navData.map((item) => (
              <MobNavLink
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
    </MobileWrap>
  )
}
