import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      background: string
      text: string
      placeholder: string
      dark: string
      white: string
      danger: string
      success: string
    }
    fonts: {
      Inter: string
    }
    paddings: {
      container: string
      pageTop: string
    }
    margins: {
      pageTop: string
    }
    containers: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
