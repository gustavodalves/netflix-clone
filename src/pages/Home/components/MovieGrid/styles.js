import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
    overflow: hidden;
`

export {
    Container
}