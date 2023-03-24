import styled from 'styled-components'

const handleSizeType = (size: Sizes) => {
  switch (size) {
    case 'sm':
      return '0.4rem 0.8rem'
    case 'lg':
      return '1em 1.4rem'
    case 'xl':
      return '1.2em 2rem'
    default:
      return '0.8rem 1rem'
  }
}

const ButtonWrap = styled.button<{ color: Colors; size: Sizes }>`
  background: ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return theme.colors.primary

      case 'secondary':
        return theme.colors.secondary

      case 'danger':
        return theme.colors.secondary

      case 'success':
        return theme.colors.success

      default:
        return 'transparent'
    }
  }};

  color: ${({ color }) => (color ? '#fff' : '#000')};

  padding: ${({ size }) => handleSizeType(size)};

  border-radius: 7px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.8;
  }
`
type Sizes = 'sm' | 'lg' | 'xl' | undefined
type Colors = 'primary' | 'secondary' | 'success' | 'danger' | undefined

interface ButtonProps {
  children: React.ReactNode
  click: () => void
  size?: Sizes
  color?: Colors
}

export const Button = ({ children, click, size, color }: ButtonProps) => {
  return (
    <ButtonWrap size={size} onClick={click} color={color}>
      {children}
    </ButtonWrap>
  )
}
