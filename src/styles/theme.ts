import { createTheme, responsiveFontSizes } from '@mui/material';
import { typographyConfigs } from './typography';
import { componentsConfigs } from './components';

export const defaultTheme = responsiveFontSizes(
  createTheme({
    components: componentsConfigs,
    typography: typographyConfigs,
    spacing: 8,
  }),
);
