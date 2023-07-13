import { fetchTrending } from 'serviceAPI/ServiceAPI';
import {  useEffect, useState } from 'react';

import { Loader } from 'components/Loader/Loader';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchTrendingWeekly = () => {
      setLoading(true);
      fetchTrending()
        .then(trendingFilm => {setFilms(trendingFilm)})
        .catch(err => console.log(err))
        .finally(setLoading(false));
    };

   return fetchTrendingWeekly();
    
  }, []);

  return (
    <><div>
    <h1>Trending today</h1>
    <div>
    <FilmList films={films} />
    </div>
    
    {loading && <Loader />}
  </div></>
    
  );
};

export default Home;
