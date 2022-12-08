import React from 'react';
import './MovieDetail.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = data;

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
    // eslint-disable-next-line
  }, [imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{Title}</div>
            <div className="movie-raiting">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}
              </span>
              <span>
                IMDB Runtime <i className="fa fa-film"></i> : {Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {Year}
              </span>
            </div>
            <div className="movie-plot">{Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
