import { Color as MUIColor } from '@mui/material';

export type Color = Partial<
  MUIColor & {
    1000: string;
    white: string;
    black: string;
    overlayOnLight: string;
    overlayOnDark: string;
  }
>;
