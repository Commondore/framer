import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/home'
import { GlobalStyles } from '@/styles/Global'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
