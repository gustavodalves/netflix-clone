import styled from 'styled-components'

const Container = styled.div`
   padding: 1rem;
   width: 100vw;
   position: fixed;
   z-index: 999;
   color: rgba(229, 9, 20, 1);
   background-color: ${(props) => props.color};
   backdrop-filter: blur( ${(props) => {
    console.log(props)
   return props.blured ? '13.5px' : '0'
   }} );
   transition: all .25s ease-out;
   `

const Content = styled.ul`
   padding: 0 3rem;
   display: flex;
   justify-content: start;
   align-items: center;
`

const Item = styled.li`
   list-style: none;
   width: auto;
   img {
      width: 6rem;
      margin-right: 1rem;
   }
   &:not(img) {
      margin-left: .8rem;
   }
   a {
      color: rgba(255, 255, 255, .7);
      text-decoration: none;  
      transition: all .2s ease-in-out;
      :hover {
         &:not(.active) {
            color: rgba(255, 255, 255, .9);
         }
      }
   }
`

export { Container, Content, Item }