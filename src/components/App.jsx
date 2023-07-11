import { Route, Routes } from 'react-router-dom';


import { lazy } from 'react';
import Layaout from './Layaout/Layaout';

// import { Home } from './pages/Home/Home';
// import { Movies } from './pages/Movies/Movies';
// import { MovieDetail } from './pages/MoviesDetail/MoviesDetail';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';


const Home = lazy(() => import('./pages/Home/Home'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetail = lazy(() => import('./pages/MoviesDetail/MoviesDetail'));
const Movies = lazy(() => import('./pages/Movies/Movies'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layaout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path='/movies/:movieId' element={<MovieDetail />}>
          <Route path='/movies/:movieId/cast' element={<Cast/>}/>
          <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
