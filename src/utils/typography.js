import Typography from 'typography';
import theme from 'typography-theme-github';

theme.overrideThemeStyles = () => ({
  'h1,h2': {
    borderBottom: 0,
  },
});


const typography = new Typography(theme);

export default typography;
