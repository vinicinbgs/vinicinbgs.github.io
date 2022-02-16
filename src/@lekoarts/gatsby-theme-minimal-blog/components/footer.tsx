/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import Comments from '../../../components/Comments';
import { useLocation } from '@reach/router';

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <hr />
      <Comments path={pathname} />
      <hr />
      <footer>
        <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
        <div>
          Follow{' '}
          <Link
            aria-label="Link to the theme author's website"
            href="https://github.com/vinicinbgs"
          >
            @vinicinbgs
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
