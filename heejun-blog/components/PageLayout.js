import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';
const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <BlogNavbar />

      <div>{children}</div>
      <footer className={`page-wrapper ${className}`}>
        <div>
          <a href="#">courses</a>
          {' | '}
          <a href="#">github</a>
          {' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
};

export default PageLayout;
