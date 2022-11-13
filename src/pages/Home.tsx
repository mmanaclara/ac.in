import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../components/Loading'

import { HomeContainer, Wrapper, TextContainer, ImageContainer} from '../styles/pages/Home'

import girl from '../assets/mulher-segurando-o-passaporte-em-uma-mao-e-um-globo-terrestre-na-outra.png'

export function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return !isLoading ? (
    <HomeContainer>
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
    </HomeContainer>
  ) : (
    <Loading />
  )
}

