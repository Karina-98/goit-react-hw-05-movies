import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c24b132e7bdacd2f4b83fad270195cf7'

export const fetchTrending= async () => {
const response = await axios.get(`${baseURL}/trending/movie/day?api_key=${API_KEY}`)


return response.data.results
}


export const fetchFilmsDetails = async (movieId) => {
    const response = await axios.get(`${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)

    if (response.status !== 200) {
        throw new Error(' ERROR! Smth went wrong! ');
      } else return response.data;
}


export const fetchCastMovie = async (movieId) => {
    const response = await axios.get(`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)

    if (response.status !== 200) {
        throw new Error(' ERROR! Smth went wrong! ');
      } else return  response.data.cast;
}

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)

    if (response.status !== 200) {
        throw new Error(' ERROR! Smth went wrong! ');
      } else return  response.data.results;
}

export const fetchSearch = async (query) => {
 
const response = await axios.get(`${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
if (response.status !== 200) {
    console.log(response)
    throw new Error(' ERROR! Smth went wrong! ');
  } else return response.data.results
}