import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";

 const FilmList = ({films}) =>{

    const location = useLocation();
    return <ul>{films.map(film=> {return<li key={film.id}><Link to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</Link> </li>})}</ul>
}

FilmList.propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };

  export default FilmList;