import { Route, Routes, useLocation } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Example2Page } from '@/pages/example2'
import { Example3Page } from '@/pages/example3'
import { Example4Page } from '@/pages/example4'
import { HomePage } from '@/pages/home'
import { GlobalStyles } from '@/styles/Global'
import { theme } from '@/styles/Theme'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'

function App() {
  const location = useLocation()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/example2" element={<Example2Page />} />
            <Route path="/example3" element={<Example3Page />} />
            <Route path="/example4" element={<Example4Page />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

export default App
