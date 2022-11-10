import { Link } from 'react-router-dom'

import { HeroContainer, Wrapper, TextContainer, ImageContainer} from './styles'

import girl from '../../assets/mulher-segurando-o-passaporte-em-uma-mao-e-um-globo-terrestre-na-outra.png'

export function Hero() {
  return (
    <HeroContainer>
        <Wrapper>
            <TextContainer>
                <h1>A melhor experiência da sua vida está te esperando!</h1>
                <span>
                    Seu sonho é nosso sonho também. <br />
                    Vamos realizá-lo juntos?
                </span>

                <Link to="/personalInfo">
                    Vamos nessa!
                </Link>
            </TextContainer>

            <ImageContainer>
                <img src={girl} alt="" />
            </ImageContainer>
        </Wrapper>
    </HeroContainer>
  )
}
