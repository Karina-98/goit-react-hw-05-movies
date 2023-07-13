import {  useLocation } from 'react-router-dom';
import { SearchLi, SearchLink, SearchUl } from './SeachFilms.styled';

const SearchFilms = ({ films }) => {
  console.log(films);
  const location = useLocation();
  return (
    <>
      <SearchUl>
        {films.map(film => (
          <SearchLi key={film.id}>
            <SearchLink to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </SearchLink>
          </SearchLi>
        ))}
        
      </SearchUl>
    </>
  );
};

export default SearchFilms;
