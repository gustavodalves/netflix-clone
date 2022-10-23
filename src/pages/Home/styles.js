import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    min-height: 100vh;
    position: relative;

    .carousel {
        margin-top: -15rem;
    }

    .info {
        color: #fff;
        position: absolute;
        top: 0;
        width: 35%;
        min-width: 400px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        font-size: 20px;
        p {
            line-height: 1.9rem;
            margin-top: 2rem;
            font-weight: 600;
        }
        .btn-group {
            width: 100%;
            margin-top: 2rem;
            .btn {
                padding: .8rem 1rem;
                border: none;
                border-radius: 4px;
                font-size: 18px;
                opacity: .9;
                transition: opacity .3s ease-out;
                cursor: pointer;
                &:not(:first-of-type) {
                    margin-left: .3rem;
                }

                &:hover {
                    opacity: .7;
                }
            }
            .btn-play {
                background-color: #fff;
                width: 30%;
            }
            .btn-know-more {
                background-color: rgba(109,109,110,0.9);;
                width: 50%;
            }
        }
    }
`;

const Banner = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.01) 100%), linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 100%), 
                        url(${(props) => props.src});
    background-size: cover;
    height: 100vh;
    border: none;
`;

// const Input = styled.div`
//     width: 15rem;
//     padding: 2px;
//     display: block;
//     margin: 20px auto 0;
//     border: none;

//     input {
//         width: 100%;
//         padding: 5px;
//         border: none;
//         outline: none;
//         background-color: transparent;
//         caret-color: white;
//         color: #fff;

//         &:focus {
//             +.line{
//                 background-color: red;
//                 width: 100%;
//                 background-position:left bottom;
//             }
//         }

//         &::placeholder {
//             color: white;
//         }
//     }

//     .line {
//         background-color: red;
//         height: 2px;
//         width: 10%;
//         display:block;
//         transition: all .3s;
//     }

// `

export {
  Container,
  Banner,
};
