import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from './contexts/CoffeeContext';
import { Router } from "./Router";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}