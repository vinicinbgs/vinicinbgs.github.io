/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import Comments from '../../../components/Comments';

const Footer = () => {
  const path = window?.location?.pathname;

  return (
    <div>
      <hr />
      <Comments path={path} />
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
