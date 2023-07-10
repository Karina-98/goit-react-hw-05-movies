import { Route, Routes } from 'react-router-dom';

import { Layaout } from './Layaout/Layaout ';

import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieDetail } from './pages/MoviesDetail/MoviesDetail';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

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
      </Route>
    </Routes>
  );
};
