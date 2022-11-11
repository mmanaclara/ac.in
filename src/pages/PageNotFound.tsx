import { ArrowLeft } from 'phosphor-react'

import { PageNotFoundContainer, Wrapper, TextContainer, ImageContainer } from "../styles/pages/PageNotFound";

import girl from '../assets/oops-girl.png'
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <PageNotFoundContainer>
        <Wrapper>
            <TextContainer>
                <h1>Eita!</h1>
                <span>Essa página que você está procurando não existe!</span>

                <Link to="/">
                    <ArrowLeft size={20} weight="bold" />
                    Voltar para o início
                </Link>
            </TextContainer>

            <ImageContainer>
                <img src={girl} alt="" />
            </ImageContainer>
        </Wrapper>
    </PageNotFoundContainer>
  )
}
