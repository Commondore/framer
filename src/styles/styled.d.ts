import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      background: string
      text: string
      primaryTextColor: string
      secondaryTextColor: string
      inputPlaceholder: string
      darkGrayText: string
      darkText: string
      black: string
      white: string
      dark: string
      medium: string
      light: string
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
