import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Home.scss';

import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const ShowText = 'Friends';
  

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(ShowText));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
