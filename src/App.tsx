import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainLayout } from 'components/templates';
import { BookmarkPage, SearchPage } from 'pages';
import { store } from 'redux/store/configStore';
import { GlobalStyle } from 'styles/global-style';
import ThemeWrapper from 'theme/ThemeWrapper';

export const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <ThemeWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<SearchPage />} />
                <Route path="bookmark" element={<BookmarkPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeWrapper>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
