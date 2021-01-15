import { ThemeProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { Router } from '@reach/router';

import { customTheme } from './theme'
import UnauthorizedRoute from './components/UnauthorizedRoute';
import AuthorizedRoute from './components/AuthorizedRoute';
import { LandingPage } from './pages/LandingPage';
import { AccessPage } from './pages/AccessPage';
import { GamePage } from './pages/GamePage';

const theme = extendTheme({
  ...customTheme,
  styles: {
    global: {
      'html, body': {
        width: '100%',
        height: '100%',
        fontFamily: 'Inter, sans-serif',
      },
    }
  }
})

function AppRoutes() {
  return (
    <Router>
      <UnauthorizedRoute component={LandingPage} path='/' />
      <UnauthorizedRoute component={AccessPage} path='/access' />

      <AuthorizedRoute component={GamePage} path='/game' />
    </Router>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <AppRoutes />
    </ThemeProvider>
  )
}