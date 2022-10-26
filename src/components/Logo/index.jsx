/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import logo from '../../assets/netflix.svg'

function Logo({ size = 'md' }) {
  const width = size === 'lg' ? 230 : size === 'sm' ? 140 : 170
  return(
    <img src={logo} alt="logo" width={width} />
  )
}

export default Logo;