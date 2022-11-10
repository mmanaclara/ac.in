import { GlobeHemisphereWest } from 'phosphor-react'

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <GlobeHemisphereWest size={30} />
      <span>ac.in</span>
    </HeaderContainer>
  )
}

