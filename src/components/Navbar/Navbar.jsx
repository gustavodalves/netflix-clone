import { useEffect, useState } from 'react'

import { Container, Content, Item } from './NavbarStyled'

const NAVBAR_COLOR_DEFAULT = 'rgba(0, 0, 0, 0)'
const NAVBAR_COLOR_SCROLL = 'rgba(0, 0, 0, 1)'

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(NAVBAR_COLOR_DEFAULT)

    useEffect(()=> {
        window.addEventListener('scroll', handleListenScrollEvent)
        return () => window.removeEventListener('scroll', handleListenScrollEvent)
    }, [])

    const handleListenScrollEvent = () => {
        if(window.scrollY > 400) {
            setNavbarColor(NAVBAR_COLOR_SCROLL)
        } else {
            setNavbarColor(NAVBAR_COLOR_DEFAULT)
        }
    }

    return(
        <nav>
            <Container color={navbarColor}>
                <Content> 
                    <Item>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo'/>
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