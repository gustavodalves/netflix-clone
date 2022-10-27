import Profile from "./components/Profile";

import profileImage from '../../assets/profile.png'
import { ProfileContainer, Container } from "./styles";

const profiles = [
  {
    name: 'Gustavo',
    img: profileImage,
  },
  {
    name: 'Leonardo',
    img: profileImage,
  },
  {
    name: 'John Doe',
    img: profileImage,
  },
  {
    name: 'Bruno',
    img: profileImage,
  },
]

function SelectProfile() {
  return(
    <Container>
      <h1> Quem está assistindo? </h1>
      <ProfileContainer>
        {
          profiles.map(profile => (
              <Profile key={profile.name} src={profile.img} name={profile.name} />
            ))
        }
      </ProfileContainer>
    </Container>
  )
}

export default SelectProfile;
