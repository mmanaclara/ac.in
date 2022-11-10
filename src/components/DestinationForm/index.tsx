import { ChatTeardropDots, GlobeSimple, Factory } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { FormContainer, InputField, SendUserInfoButton } from './styles'

export function DestinationForm() {
  return (
    <FormContainer>
        <label>
            Idioma
            <InputField>
                <ChatTeardropDots size={20} weight="bold" />
                <input type="text" placeholder="Digite o idioma do curso" autoFocus />
            </InputField>
        </label>

        <span>Onde você vai viver a sua próxima aventura?</span>

        <label>
            País
            <InputField>
                <GlobeSimple size={20} weight="bold" />
                <input type="text" placeholder="Selecione um ou mais países" />
            </InputField>
        </label>

        <label>
            Cidade
            <InputField>
                <Factory size={20} weight="bold" />
                <input type="text" placeholder="Selecione uma ou mais cidades" />
            </InputField>
        </label>

        <Link to="/destination">
            <SendUserInfoButton>
            Enviar
            </SendUserInfoButton>
        </Link>
    </FormContainer>
  )
}