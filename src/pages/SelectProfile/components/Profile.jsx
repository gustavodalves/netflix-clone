/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Name, Root, ImageProfile } from './styles'

function Profile({ src, name }) {
  const navigate = useNavigate();
  return (
    <Root onClick={() => navigate('/')}>
      <div>
        <ImageProfile width={120} src={src} alt={name} />
        <Name> {name} </Name>
      </div>
    </Root>
  )
}

export default Profile;
