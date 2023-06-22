import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';
import './styles/App.css';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', // rota inicial
      element: <Users />,
    },
    {
      path: '/posts/:id',
      element: <Posts />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider router={ router } />
  );
}

export default App;
