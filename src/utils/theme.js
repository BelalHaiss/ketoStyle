import { extendTheme } from '@chakra-ui/react';
const breakpoints = {
  sm: '320px',
  md: '700px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
};
const theme = extendTheme({
  breakpoints,
  fonts: {
    body: `'Vazir', sans-serif !important`,
    heading: `'Vazir', sans-serif !important`
  },
  styles: {
    global: {
      body: {
        direction: 'rtl',
        backgroundColor: 'orange.50'
      }
    }
  }
});
export default theme;
