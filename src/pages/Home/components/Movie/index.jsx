import { useState } from 'react';
import { Container } from './styles'
import Modal from '../Modal'
import { useEffect } from 'react';

import StarRatings from 'react-star-ratings';
const STORED_GENRES = JSON.parse(localStorage.getItem("genres"));

const Movie = ({data, image}) => { 
    const [ isModalVisible, setIsModalVisible ] = useState(false)

    useEffect(() => {
        if(isModalVisible) {
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";         
        } else {
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes";  
        }
    }, [isModalVisible])


    const handleFormatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US")
    }

    return (
        <>
            <Container>
                <button onClick={() => setIsModalVisible(!isModalVisible)}>
                    <img className="movie" src={image[0]} alt={data.title} />
                    {/* <p className="title">{title}</p> */}
                </button> 
            </Container>

            {isModalVisible && 
                <Modal onClose={() => setIsModalVisible(false)}>
                    <div onClick={() => console.log(data)} className="header">
                        <a href='#' target="_blank">
                            <img className="movie" src={image[1]} alt={data.title} />
                            <img className='play' src='https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png' alt="reproduzir"/>
                        </a>
                    </div>
                    <div className="content">
                        <span className='release=date'> {handleFormatDate(data.release_date)} </span>
                            <div className="row">
                                <h1>{data.title}</h1>
                                <StarRatings
                                    rating={data.vote_average / 2}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    starRatedColor="#FFD700"
                                />
                            </div>
                            <div className="row">
                                <p className='overview'> {data.overview} </p>
                                    <div className="genres">
                                        <span className='genre'> Genres: </span>
                                        {
                                        data.genre_ids.map((genre, index) => {
                                            const genreString = STORED_GENRES.find(item => item.id === genre)
                                            return <span className='genre' key={genre}> { genreString.name }{index !== data.genre_ids.length - 1 && ','} </span>
                                        })}
                                    </div>
                                </div>
                            <div className="row">
                                <button> Play </button>
                            </div>
                    </div>
                </Modal> 
            }
        </>
    )
}

export default Movie