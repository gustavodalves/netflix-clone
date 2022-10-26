/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'

import { Container, Content, Item } from './styles'

import logo from '../../../../assets/netflix.svg'

const NAVBAR_COLOR_DEFAULT = 'rgba(0, 0, 0, 0)'
const NAVBAR_COLOR_SCROLL = 'rgba(0, 0, 0, 0.45)'

function Navbar() {
    const [navbarColor, setNavbarColor] = useState(NAVBAR_COLOR_DEFAULT)
    const [isBlured, setIsBlured] = useState(false)

    const handleListenScrollEvent = () => {
        if(window.scrollY > 400) {
            setNavbarColor(NAVBAR_COLOR_SCROLL)
            setIsBlured(true)
        } else {
            setNavbarColor(NAVBAR_COLOR_DEFAULT)
            setIsBlured(false)
        }
    }

    useEffect(()=> {
      window.addEventListener('scroll', handleListenScrollEvent)
      return () => window.removeEventListener('scroll', handleListenScrollEvent)
  }, [])
  
    return(
        <nav>
            <Container blured={isBlured} color={navbarColor}>
                <Content> 
                    <Item>
                        <img src={logo} alt='logo'/>
                    </Item>

                    <Item>
                        <a href='#'> Home </a>
                    </Item>

                    <Item>
                        <a href='#'> Movies </a>
                    </Item>

                    <Item>
                        <a href='#'> Shows </a>
                    </Item>

                    <Item>
                        <a href='#'> Trending </a>
                    </Item>
                </Content>
            </Container>
        </nav>
    )
}

export default Navbar