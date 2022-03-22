import { merge } from 'theme-ui';
import originalTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index';

const theme = merge(originalTheme, {
  colors: {
    heading: `#5e5e5e`
  }
});

export default theme;
