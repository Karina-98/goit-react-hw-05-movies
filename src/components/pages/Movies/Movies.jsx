import { SearchFilms } from 'components/SearchFilms/SearchFilms';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { fetchSearch } from 'components/ServiceAPI/ServiceAPI';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorCard } from 'components/Error/Error';
import { useCustomContext } from 'components/Context/Context';

export const Movies = () => {
  const {search, setSearch} = useCustomContext();
  const [err, setErr] = useState('');
  const [found, setFound] = useState(false);
  const [loading, setLoading] = useState(false);



  const fetchSearchMovie = movie => {
    setLoading(true);
    fetchSearch(movie)
      .then(result => {
        setSearch(result);
        setFound(result.length === 0);
      })
      .catch(err =>  setErr(err.statusText))
      .finally(setLoading(false));
  };

  return (
    <>
      <FormSearch fetchSearchMovie={fetchSearchMovie} />
      {loading && <Loader />}
      {search && <SearchFilms films={search} />}
      {found  && <p>Nothing found, please re-enter the title</p>}
      {err && <ErrorCard>{err}</ErrorCard>}
    </>
  );
};
