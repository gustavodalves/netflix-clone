import { useRef } from "react"
import { Button, MovieList, Container, Genre } from './styles'

import arrowImage from '../../../../assets/right-arrow.png'

import Movie from '../Movie'

const MovieCarousel = ({data, title}) => {
    const carousel = useRef(null)

    const handleLeftClick= (event) => {
        event.preventDefault()
        carousel.current.scrollLeft -=  800
    }

    const handleRightClick= (event) => {
        event.preventDefault()
        carousel.current.scrollLeft +=  800
    }

    return (
        <Container>
            <Genre href="#"> {title}  <span className="know-more">Ver Tudo</span> </Genre>
            <Button 
                className="btn btn-left" 
                onClick={handleLeftClick}
            > 
                <img src={arrowImage} alt="Left" />
            </Button>

            <MovieList ref={carousel}>

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
            </MovieList>

            <Button 
                className="btn btn-right"
                onClick={handleRightClick} 
            > 
                <img src={arrowImage} alt="Right" />
            </Button>
        </Container>
    )
}

export default MovieCarousel
