import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './components/Error/Error.tsx';
import Loading from './components/Loading/Loading.tsx';
import './index.css';

const DescriptionPageLazy = React.lazy(
  () => import('./pages/DescriptionPage.jsx')
);
const EtfPageLazy = React.lazy(() => import('./pages/EtfPage.tsx'));

const ContactPageLazy = React.lazy(() => import('./pages/ContactPage.tsx'));

const EtfModalLazy = React.lazy(
  () => import('./components/EtfModal/EtfModal.tsx')
);

const HistoryTabLazy = React.lazy(
  () => import('./components/EtfModal/Tabs/HistoryTab.tsx')
);

const CountriesTabLazy = React.lazy(
  () => import('./components/EtfModal/Tabs/CountriesTab.tsx')
);

const DescriptionTabLazy = React.lazy(
  () => import('./components/EtfModal/Tabs/DescriptionTab.tsx')
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <DescriptionPageLazy />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'etf',
        element: (
          <React.Suspense fallback={<Loading />}>
            <EtfPageLazy />
          </React.Suspense>
        ),
        children: [
          {
            path: ':ticker',
            element: (
              <React.Suspense fallback={<Loading />}>
                <EtfModalLazy />
              </React.Suspense>
            ),
            children: [
              {
                path: 'history',
                element: (
                  <React.Suspense
                    fallback={<Loading strokeWidth="1" width="30" />}
                  >
                    <HistoryTabLazy />
                  </React.Suspense>
                ),
                errorElement: <Error />,
              },
              {
                path: 'countries',
                element: (
                  <React.Suspense
                    fallback={<Loading strokeWidth="1" width="30" />}
                  >
                    <CountriesTabLazy />
                  </React.Suspense>
                ),
                errorElement: <Error />,
              },
              {
                path: 'description',
                element: (
                  <React.Suspense
                    fallback={<Loading strokeWidth="1" width="30" />}
                  >
                    <DescriptionTabLazy />
                  </React.Suspense>
                ),
                errorElement: <Error />,
              },
            ],
            errorElement: <Error />,
          },
        ],
        errorElement: <Error />,
      },
      {
        path: 'contact',
        element: (
          <React.Suspense fallback={<Loading />}>
            <ContactPageLazy />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
