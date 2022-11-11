import { ArrowLeft } from 'phosphor-react'

import { SuccessContainer, Wrapper, TextContainer, ImageContainer } from "../styles/pages/Success";

import girl from '../assets/yay.png'
import { Link } from "react-router-dom";

export function Success() {
  return (
    <SuccessContainer>
        <Wrapper>
            <TextContainer>
                <h1>Woo hoo!</h1>
                <span>Agora o seu sonho está mais próximo de se tornar realidade!</span>
                <span>Você vai receber um e-mail para começarmos a planejar TU-DO! Combinado? 🤩</span>

                <Link to="/">
                    <ArrowLeft size={20} weight="bold" />
                    Voltar para o início
                </Link>
            </TextContainer>

            <ImageContainer>
                <img src={girl} alt="" />
            </ImageContainer>
        </Wrapper>
    </SuccessContainer>
  )
}