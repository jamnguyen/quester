import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from './styles';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
