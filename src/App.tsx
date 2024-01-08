import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainLayout } from './components';
import ThemeWrapper from './theme/ThemeWrapper';

export const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainLayout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeWrapper>
    </QueryClientProvider>
  );
};

export default App;
