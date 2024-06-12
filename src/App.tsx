import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { defaultTheme } from './styles';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages';
import { persistor, store } from './redux';

export function App() {
  console.log('Message from Jam', import.meta.env.VITE_JAM_MESSAGE);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
