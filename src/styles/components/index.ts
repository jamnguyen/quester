import { ThemeOptions } from '@mui/material';
import { buttonConfigs } from './button';
import { containerConfigs } from './container';
import { textFieldConfigs } from './textField';

export const componentsConfigs: ThemeOptions['components'] = {
  MuiButton: buttonConfigs,
  MuiContainer: containerConfigs,
  MuiTextField: textFieldConfigs,
};
