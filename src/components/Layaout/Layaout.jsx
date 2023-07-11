import { Outlet } from 'react-router-dom';
import { Container, HeaderDom, Link } from './Layaout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

 const Layaout = () => {
  return (
    
      <Container>
        <HeaderDom>
          <nav>
            <Link to="/">Home</Link>

            <Link to="/movies">Movies</Link>
          </nav>
        </HeaderDom>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
 
  );
};

export default Layaout;