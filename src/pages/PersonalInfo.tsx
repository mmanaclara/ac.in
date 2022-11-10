import { Heart } from 'phosphor-react'
import { UserInfoForm } from '../components/UserInfoForm'

import { UserInfoContainer, Wrapper, TextContainer, ImageContainer } from '../styles/pages/PersonalInfo'

import girls from '../assets/tres-mulheres-andando-em-um-dia-frio.png'

export function PersonalInfo() {
    return (
      <UserInfoContainer>
        <Wrapper>
          <TextContainer>
              <header>
                  <h2>
                      <Heart size={24} weight="fill" color="#FFC632" />
                      Vamos ser amigos?
                  </h2>
                  <span>Fale um pouco mais sobre você...</span>
              </header>

              <UserInfoForm />
          </TextContainer>
        </Wrapper>

        <ImageContainer>
          <img src={girls} alt="" />
        </ImageContainer>
    </UserInfoContainer>
    )
  }