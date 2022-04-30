import styled from 'styled-components'

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background-color: rgb(20, 20, 20);
        color: #000;
        width: 45%;
        min-width: 500px;
        height: 90%;
        min-height: 700px;
        border-radius: 10px;
        position: relative;
        overflow: auto;

        .close {
            position: relative;
            background-color: rgb(20,20,20);
            border: none;
            outline: none;
            width: 32px;
            height: 32px;
            right: calc(-100% + 64px);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 1.2rem;
            z-index: 9000;
            top: 10px;
            transition: all .3s ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: rgb(30,30,30);
            }

            &:before,
            &:after{
                content: ' ';
                position: absolute;
                width: 2.5px;
                height: 24px;
                background-color: #fff;
            }

            &:before {
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(-45deg);
            }
        }
    }
`

const ModalContent = styled.div`
    background-color: rgb(20, 20, 20);
    
    .header {
        position: relative;
        width: 100%;
        top: -40px;
        transition: opacity .1s linear;
        :hover {
            opacity: .67;
            cursor: pointer;
        }
        .movie {
            width: 100%;
            height: 400px;
            object-fit: cover;
            object-position: center;
            border-radius: 10px 10px 0 0;
        }

        .play {
            position: absolute;
            width: 3rem;
            left: 50%;
            top: 50%;
            transform: translateY(-50%);
            transition: all .2s linear;
            padding: .2rem;
            border-radius: 50%;
            z-index: 9999999;
            display: none;
            animation: play .2s;
            :hover {
                background-color: grey !important;
            }
        }
        @keyframes play {
            0% {
                opacity: .1
            }

            100% {
                opacity: 1;
            }
        }

        :hover {
            .play {
                display: block !important;
                background-color: white;
            }
        }
    }
    .content {
        padding: 0 1rem;
        color: #fff;

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: center;
            &:not(:first-of-type) {
                margin-top: 1rem;
            }

                .genres {
                    font-size: .9rem;
                    align-self: start;
                }



        }

        @media screen and (max-width: 600px) {
            .row {
            justify-content: center;
            flex-direction: column;
        }
        }

        .overview {
            width: 65%;
            color: #fff;
            line-height: 1.4rem;
        }
    }

    button {
        padding: .5rem 1rem;
        width: 15%;
        outline: none;
        border: none;
        border-radius: .3rem;
        font-size: .9rem;
        cursor: pointer;
        transition: all .4s ease-out;

        &:hover {
            background-color: rgba(255,255,255,.7);
        }
    }
`

export {
    ModalContainer,
    ModalContent
}