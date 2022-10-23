import React, { useEffect } from "react";
import axios from 'axios';

import MovieCarousel from './components/MovieCarousel';
import Navbar from './components/Navbar';
import { Banner, Container } from './styles';

import MovieDBService from '../../services/MovieDBService';
import useAxios from '../../hooks/useAxios';
import Loader from '../../styles/Loader';

const GENRE_URL = `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

function Home() {
  const [fetchMovies, _, moviesIsLoading] = useAxios(MovieDBService.getPopularMovies);

  const movies = fetchMovies.results ?? [];
  const mostPopular = (movies[Math.floor(Math.random() * (20 - 1)) + 1]) || {};

  useEffect(() => {
    axios.get(GENRE_URL).then((response) => {
      const { data: { genres } } = response;
      localStorage.setItem('genres', JSON.stringify(genres));
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        moviesIsLoading ? <Loader />
          : (
            <Container>
              <Navbar />
              <section id="header">
                <Banner
                  src={`https://image.tmdb.org/t/p/original${mostPopular.backdrop_path}`}
                  alt=""
                />

                <div className="info">
                  <h3>
                    {mostPopular.original_title}
                  </h3>
                  {mostPopular.overview && (
                  <p>
                    {mostPopular.overview.split('.')[0]}
                    .
                  </p>
                  )}
                  <div className="btn-group">
                    <button type="button" className="btn btn-play"> Play </button>
                    <button type="button" className="btn btn-know-more"> Know More </button>
                  </div>
                </div>
              </section>
              <section className="carousel" id="main">
                <MovieCarousel data={movies} title="Netflix Originals" />
                <MovieCarousel data={movies} title="Action" />
                <MovieCarousel data={movies} title="Comedy" />
                <MovieCarousel data={movies} title="Family" />
              </section>
            </Container>
          )
    }
    </>
  );
}

export default Home;
