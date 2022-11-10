import { AirplaneTilt } from 'phosphor-react'
import { DestinationForm } from '../components/DestinationForm'

import { DestinationContainer, Wrapper, TextContainer, ImageContainer } from '../styles/pages/Destination'

import girl from '../assets/mulher-de-costas-usando-um-chapeu-e-segurando-um-mapa.png'

export function Destination() {
    return (
      <DestinationContainer>
        <Wrapper>
          <TextContainer>
              <header>
                  <h2>
                      <AirplaneTilt size={24} weight="fill" color="#FFC632" />
                      Agora conta...
                  </h2>
                  <span>Em qual idioma vai ser o seu curso?</span>
              </header>

              <DestinationForm />
          </TextContainer>
        </Wrapper>

        <ImageContainer>
          <img src={girl} alt="" />
        </ImageContainer>
    </DestinationContainer>
    )
  }