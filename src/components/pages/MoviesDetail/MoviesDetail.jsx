import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {  useEffect, useState } from 'react';

import { fetchFilmsDetails } from 'components/ServiceAPI/ServiceAPI';
import { ErrorCard } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

export const MovieDetail = () => {
  const [movieDet, setMovieDet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    const fetchMovieDet = () => {
      setLoading(true);
      fetchFilmsDetails(movieId)
        .then(moviesDet => setMovieDet(moviesDet))
        .catch(error => setError(error.statusText))
        .finally(setLoading(false));
    };
    fetchMovieDet();
  }, [movieId]);
  console.log(movieDet);
  if (!movieDet) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieDet;

  return (
    <>
      <button>
        <Link to={location.state?.from ?? '/'}>Go Back</Link>
      </button>
      {loading && <Loader/>}
      <div>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt={original_title}
        />
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
         
            <Outlet />
      
        </div>
      </div>
      {err && <ErrorCard>{err}</ErrorCard>}
    </>
  );
};
