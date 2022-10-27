import styled, { keyframes } from "styled-components";

const show = keyframes`
from {
    transform: scale(1.5);
    display: none;
    overflow: hidden;
  }
  to {
    display: block;
    transform: initial; 
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  max-width: 80%;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${show} 1s;
`