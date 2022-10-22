/* eslint-disable class-methods-use-this */
import movieDBApi from '../api/movieDB';

class MovieDBService {
  getPopularMovies() {
    return movieDBApi.get('movie/popular', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });
  }
}

export default new MovieDBService();
