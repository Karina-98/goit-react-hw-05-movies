import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorCard } from 'components/Error/Error';

import FormSearch from 'components/FormSearch/FormSearch';

import { useLocation, useSearchParams } from 'react-router-dom';

import SearchFilms from 'components/SearchFilms/SearchFilms';
import { fetchSearch } from 'serviceAPI/ServiceAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    const getSearchQuery = async () => {
  
   setLoading(true);
      fetchSearch(query)
        .then(result => {
          setMovies(result);
          
        })
        .catch(err => setErr(err.statusText))
        .finally(setLoading(false));
    };

    getSearchQuery();
  }, [searchParams]);

  const fetchSearchMovie = paramsQuery => {
    setSearchParams({'query':paramsQuery});
  };

  return (
    <>
      <FormSearch
        fetchSearchMovie={fetchSearchMovie}
        setSearchParams={setSearchParams}
      />
      {loading && <Loader />}
      <SearchFilms films={movies} state={{from: location}}/>

      {err && <ErrorCard>{err}</ErrorCard>}
    </>
  );
};

export default Movies;
