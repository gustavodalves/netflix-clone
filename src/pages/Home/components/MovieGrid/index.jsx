import { Container } from './styles'

import Movie from '../Movie'

const MovieGrid = ({ data }) => {

    return (
        <Container>
            {data.map((movie) => {
                    const { poster_path: poster,backdrop_path: backdrop, id } = movie
                    const imagePoster = `https://image.tmdb.org/t/p/w342${poster}`
                    const imageBackGround = `https://image.tmdb.org/t/p/original${backdrop}`

                    return (
                        <Movie 
                            key={id} 
                            data={movie}
                            image={[imagePoster, imageBackGround]}
                        />
                    )
                })}
        </Container>
    )
}

export default MovieGrid