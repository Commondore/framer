import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Example2Page } from '@/pages/example2'
import { Example3Page } from '@/pages/example3'
import { HomePage } from '@/pages/home'
import { GlobalStyles } from '@/styles/Global'
import { theme } from '@/styles/Theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example2" element={<Example2Page />} />
          <Route path="/example3" element={<Example3Page />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
