/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */

import { Pencil } from 'phosphor-react'
import { EditButtonRoot, EditButtonIcon, Name, Root } from './styles'


function Profile({ src, name }) {
  return (
    <Root>
      <div>
        <img width={140} src={src} alt={name} />
        <Name> {name} </Name>
      </div>
      <EditButtonRoot>
        <Pencil size={20} color="#e1e1e1" />
      </EditButtonRoot>
    </Root>
  )
}

export default Profile;
