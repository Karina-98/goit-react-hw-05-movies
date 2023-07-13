import { Link, useLocation } from 'react-router-dom';
import { SearchUl } from './SeachFilms.styled';

const SearchFilms = ({ films }) => {
  console.log(films);
  const location = useLocation();
  return (
    <>
      <SearchUl>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
        ;
      </SearchUl>
    </>
  );
};

export default SearchFilms;
