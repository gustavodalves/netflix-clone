import styled from "styled-components";

export const Name = styled.p`
  text-align: center;
`

export const Root = styled.div`
  transition: all .2s linear;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 240px;
  
  div {
    cursor: pointer;
    transition: all .1s linear;
    :hover {
      transform: translateY(-8px);
    }
  }
`

export const EditButtonRoot = styled.button`
  background-color: #1e1e1e;
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 50%;
  transition: all .2s linear;

  :hover {
    background-color: #5e5e5e;
  }
`

export const EditButtonIcon = styled.img`
  width: 16px;
  color: white;
`
