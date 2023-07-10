import PropTypes from 'prop-types';

import { useState } from "react";

export const FormSearch = ({fetchSearchMovie}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = event => {
      setQuery(event.target.value);
      
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      fetchSearchMovie(query.toLowerCase());
    };
   
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
}


FormSearch.propTypes = {
    searchMovies: PropTypes.func.isRequired,
  };
  