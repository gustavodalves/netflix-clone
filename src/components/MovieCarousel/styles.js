import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding: 0 1em;
`

const Genre = styled.a `
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    font-weight: 600;

    .know-more{
        display: none;
        color: #fff;
        font-size: .9rem;
        text-decoration: none;
        transition: all .3s;

        &::after {
            content: '>';
            animation: 2s test2;
        }
    }
    
    &:hover {
        .know-more{
            display: inline;
            margin-left: .3rem;
            animation: .6s test;
            text-decoration: outline;
        }
    }

    @keyframes test {
        0% {
            margin-left: 0rem;
        }

        40% {
            margin-left: .3rem;
        }
    }
`

const MovieList = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    list-style: none;
    overflow: hidden;
    scroll-behavior: smooth;
`

const Button = styled.button`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    transition: all .3s;
    img {
        width: 2rem;
    }

    &:hover {
        background-color: rgba(0,0,0,.8);
        border-radius: 2rem;
    }
`

export {
    Container,
    MovieList,
    Button,
    Genre
}