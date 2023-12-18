import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'products',
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
