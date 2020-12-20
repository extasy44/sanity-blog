import { Container } from 'react-bootstrap';
import Head from 'next/head';
import BlogNavbar from './Navbar';
const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Container>
        <BlogNavbar />

        <div>{children}</div>
        <footer className={`page-footer`}>
          <div>
            <a href="https://github.com/extasy44">Github</a>
            {' | '}
            <a href="http://dopingdesign.com/heejun">Website</a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default PageLayout;
