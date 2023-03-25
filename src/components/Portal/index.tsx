import { memo, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalUIProps {
  id: string
  children: React.ReactNode
}

const PortalUI = ({ id, children }: PortalUIProps) => {
  const el = useRef(
    document.getElementById(id) || document.createElement('div')
  )
  const [isDynamic] = useState(!el.current.parentElement)
  useEffect(() => {
    if (isDynamic) {
      el.current.id = id
      document.body.appendChild(el.current)
    }
    return () => {
      if (isDynamic && el.current.parentElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        el.current.parentElement.removeChild(el.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return createPortal(children, el.current)
}

export const Portal = memo(PortalUI)
