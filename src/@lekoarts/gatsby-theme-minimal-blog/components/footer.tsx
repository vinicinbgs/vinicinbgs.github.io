/** @jsx jsx */
import { jsx, Link } from "theme-ui";

const Footer = () => {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div>
        Follow {' '}
        <Link
          aria-label="Link to the theme author's website"
          href="https://github.com/vinicinbgs"
        >
          @vinicinbgs
        </Link>
      </div>
    </footer>
  )
} 

export default Footer
