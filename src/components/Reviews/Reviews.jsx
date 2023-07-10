import { Loader } from 'components/Loader/Loader';
import { fetchReviews } from 'components/ServiceAPI/ServiceAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsMovie = () => {
      setLoading(true);
      fetchReviews(movieId)
        .then(reviews => setReviews(reviews))
        .catch(error => console.log(error))
        .finally(setLoading(false));
    };
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  )
};
