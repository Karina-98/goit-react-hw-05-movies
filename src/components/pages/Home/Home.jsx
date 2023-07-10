import { fetchTrending } from 'components/ServiceAPI/ServiceAPI';
import {  useEffect, useState } from 'react';
import { FilmList } from '../FilmList/FilmList';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
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

    console.log(films)
   return fetchTrendingWeekly();
    
  }, [films]);

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
