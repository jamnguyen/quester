import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './home';
import { ROUTE } from '@/constants';
import { EditPage } from './edit';
import { PresentPage } from './present';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTE.EDIT,
    element: <EditPage />,
  },
  {
    path: ROUTE.PRESENT,
    element: <PresentPage />,
  }
]);
