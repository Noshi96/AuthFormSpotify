import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const LoginPage = React.lazy(() =>
  import('./modules/HomeModule/pages/LoginPage/LoginPage')
);
const RegisterPage = React.lazy(() =>
  import('./modules/HomeModule/pages/RegisterPage/RegisterPage')
);
const Root = React.lazy(() => import('./modules/HomeModule/pages/Root/Root'));

const suspenseComponent = (component: React.ReactNode) => (
  <React.Suspense fallback=''>{component}</React.Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: suspenseComponent(<Root />),
    children: [
      {
        path: 'login',
        element: suspenseComponent(<LoginPage />),
      },
      {
        path: 'register',
        element: suspenseComponent(<RegisterPage />),
      },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
