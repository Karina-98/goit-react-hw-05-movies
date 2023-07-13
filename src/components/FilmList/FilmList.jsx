import PropTypes from 'prop-types';

import {  useLocation } from "react-router-dom";
import { ListLi, ListLink, ListUl } from './FilmList.styled';

 const FilmList = ({films}) =>{

    const location = useLocation();
    return <ListUl>{films.map(film=> {return<ListLi key={film.id}><ListLink to={`/movies/${film.id}`} state={{ from: location }}>{film.title}</ListLink> </ListLi>})}</ListUl>
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