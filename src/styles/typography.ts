import { ThemeOptions } from '@mui/material';
import { fontFamily, fontWeight } from './constants/fonts';

export const typographyConfigs: ThemeOptions['typography'] = {
  fontFamily: fontFamily.primary,
  h1: {
    fontSize: 48,
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontSize: 32,
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontSize: 24,
    fontWeight: fontWeight.bold,
  },
  h4: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
  },
  h5: {
    fontSize: 18,
    fontWeight: fontWeight.strong,
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
};
