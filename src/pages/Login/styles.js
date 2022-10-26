import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.01) 100%), linear-gradient(to top, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0) 100%),
                        url(${(props) => props.src});
    background-size: cover;
    min-height: 100vh;
    padding: 16px;

    @media (max-width: 730px) {
      background-image: none;
    }
`
export const FormRoot = styled.div`
    min-height: 75vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 730px) {
      display: block;
      margin-top: 16px;
    }
`

export const FormCard = styled.div`
    width: 400px;
    height: 500px;
    padding: 18px 30px;
    background-color: rgba(0,0,0,.68);
    display: flex;
    flex-direction: column;
    justify-content:  space-around;
    backdrop-filter: blur(2px);

    @media (max-width: 730px) {
      padding: 0;
      width: 100%;
    }

    ${Button} {
      margin-top: 20px;
    }
`

export const FormHeading = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
`;
