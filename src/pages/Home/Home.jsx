import axios from "axios"
import { useEffect, useState } from "react"

import MovieCarousel from "../../components/MovieCarousel/MovieCarousel"
import MovieGrid from "../../components/MovieGrid/MovieGrid"
import Navbar from "../../components/Navbar/Navbar"
import { Container } from './HomeStyle'

import './HomeStyled.scss';

const MOVIES_URL = `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
const GENRE_URL = `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

const Home = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [mostPopular, setMostPopular] = useState({})
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        axios.get(MOVIES_URL).then(response => {
            const { data: { results } } = response
            setMovies(results)
            setMostPopular(results[Math.floor(Math.random() * (20 - 1)) + 1])
        })
        
        axios.get(GENRE_URL).then(response => {
            const { data: { genres } } = response
            localStorage.setItem('genres', JSON.stringify(genres))
        })
    }, [])

    return (
        <Container>  
            <Navbar />
            <section className="cover">
                <div
                    className="logo" 
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.01) 100%), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 100%), 
                        url(https://image.tmdb.org/t/p/original${mostPopular.backdrop_path})`,
                        backgroundSize: "cover",
                        height: "100vh",
                        border: "none",
                    }} 
                    alt="" 
                />

                <div className="info">
                    <h3> {mostPopular.original_title} </h3>
                    {mostPopular.overview && <p> {mostPopular.overview.split('.')[0]}.</p>}
                    <div className="btn-group">
                        <button className="btn btn-play"> Play </button>
                        <button className="btn btn-know-more"> Know More </button>
                    </div>
                </div>
            </section> 
            <section id="carousel">
            {/* { <Input>
                <input 
                    onChange={(e) => {setSearch(e.target.value)}} 
                    onBlur={() => setFocused(false)} 
                    onFocus={() => setFocused(true)}
                    value={search}
                    placeholder="Digite o Nome do Filme"
                />
                <span className="line" />
            </Input>} */}
            {
                search || focused ? (
                    <MovieGrid data={movies.filter(movie => movie.title.includes(search))} />
                ) : (
                    <>
                        <MovieCarousel data={movies} title="Netflix Originals" />
                        <MovieCarousel data={movies} title="Action"/>
                        <MovieCarousel data={movies} title="Comedy"/>
                        <MovieCarousel data={movies} title="Family"/>
                    </>
                )
            }
            </section>           
        </Container>
    )
}

export default Home