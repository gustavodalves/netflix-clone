import styled from 'styled-components';

const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 50px;
    height: 50px;

    :after {
        content: "";
        background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;
        -moz-background-size: 100%;
        -o-background-size: 100%;
        background-size: 100%;
        position: absolute;
        margin: -6px;
        width: inherit;
        height: inherit;
        animation: nfLoader-spin 1.1s linear infinite,1!important;
        -webkit-animation: nfLoader-spin 1.1s linear infinite,1!important; 
        }
        @keyframes nfLoader-spin {
        100% {
            transform: rotate(360deg);
        }
        }
        @-webkit-keyframes nfLoader-spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
`;

export default Loader;
