import styled from "styled-components";

export const Name = styled.p`
  transition: color .2s ease-in-out;
  text-align: center;
`

export const ImageProfile = styled.img`
  transition: border .2s ease-in-out;
  width: 120px;
  border: 1px solid transparent;
  border-radius: 2px;
`

export const Root = styled.div`
  transition: all .2s linear;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    cursor: pointer;
    transition: all .1s linear;
  }

  :hover  {

    ${Name} {
      color: #fff;
    }

    ${ImageProfile} {
      border-color: #fff;
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