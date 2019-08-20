import Typography from 'typography';
import theme from 'typography-theme-github';

theme.overrideThemeStyles = () => ({
  h1: {
    fontSize: '1.5rem',
  },
  'h1,h2': {
    borderBottom: 0,
  },
  a: {
    // borderBottom: '1px solid rgba(0, 0, 0, 0.50)',
    // color: 'rgba(0, 0, 0, 0.50)',
  },
  'a:hover': {
    // textDecoration: 'none',
    // color: 'rgba(0, 0, 0, 0.85)',
  },
});


const typography = new Typography(theme);

export default typography;
