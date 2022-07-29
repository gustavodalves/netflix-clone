import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;

    button {
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer;

            .movie {
                transform: scale(1);
            }
        }
    }
    .movie {
        transform: scale(.95);
    }
    &:hover {
        .title {
            opacity: 1;
        }
    }

    .title {
        opacity: 0;
        transition: all .3s;
        position: relative;
    }

    .movie {
        width: 210px;
        border-radius: .5rem;
        transition: all .3s;
    }

`

export { 
    Container 
}