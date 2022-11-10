import { User, EnvelopeSimple, Phone, IdentificationCard } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { FormContainer, InputField, SendUserInfoButton } from './styles'

export function UserInfoForm() {
  return (
    <FormContainer>
        <label>
            Nome
            <InputField>
                <User size={20} weight="bold" />
                <input type="text" placeholder="Digite o seu nome" autoFocus />
            </InputField>
        </label>

        <label>
            E-mail
            <InputField>
                <EnvelopeSimple size={20} weight="bold" />
                <input type="text" placeholder="Digite o seu e-mail" />
            </InputField>
        </label>

        <label>
            Telefone
            <InputField>
                <Phone size={20} weight="bold" />
                <input type="text" placeholder="Digite o seu telefone" />
            </InputField>
        </label>

        <label>
            CPF
            <InputField>
                <IdentificationCard size={20} weight="bold" />
                <input type="text" placeholder="Digite o seu CPF" />
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
