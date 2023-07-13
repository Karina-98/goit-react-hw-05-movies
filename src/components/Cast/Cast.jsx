import { Loader } from 'components/Loader/Loader';
import { fetchCastMovie } from 'serviceAPI/ServiceAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = () => {
      setLoading(true);
      fetchCastMovie(movieId)
        .then(actors => setActors(actors))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    };
    fetchActors();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <ul>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <h2>{name}</h2>
            <h2>Character: {character}</h2>
          </li>
        ))}
        {actors.length === 0 && (
          <div>We don't have any cast for this movie</div>
        )}
      </ul>
    </div>
  );
};

export default Cast;
