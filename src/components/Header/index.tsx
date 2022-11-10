import { GlobeHemisphereWest } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <GlobeHemisphereWest size={30} />
        <span>ac.in</span>
      </Link>
    </HeaderContainer>
  )
}

