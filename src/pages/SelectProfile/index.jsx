import Profile from "./components/Profile";

import profileImage from '../../assets/profile.png'
import { Container } from "./styles";

const profiles = [
  {
    name: 'Gustavo',
    img: profileImage,
  },
  {
    name: 'Leonardo',
    img: profileImage,
  },
]

function SelectProfile() {
  return(
    <Container>
      {
        profiles.map(profile => (
            <Profile key={profile.name} src={profile.img} name={profile.name} />
          ))
      }
    </Container>
  )
}

export default SelectProfile;
