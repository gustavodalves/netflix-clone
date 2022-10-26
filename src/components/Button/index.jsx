/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as Styled from './styles'

function Button({ children, type='button', ...props }) {
  return(
    <Styled.Button type={type} {...props}> { children } </Styled.Button>
  )
}

export default Button;
