import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from './services';
import { theme } from './theme';
import { GlobalStyles } from './theme/theme';
import { Header } from './components/header';
import { Router } from './routes';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Header />

      <main>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>

      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>

    <GlobalStyles />
  </ThemeProvider>
);
