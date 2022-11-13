import { User, EnvelopeSimple, Phone, IdentificationCard } from 'phosphor-react'
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react';
import Mask from '../../mask';

import { FormContainer, InputField, SendUserInfoButton } from './styles'

const submitFormValidationSchema = zod.object({
    name: zod.string().min(3, "Nome é obrigatório"),
    email: zod.string().email({ message: 'Email é obrigatório'}).min(5, { message: "Formato de e-mail inválido"}),
    phone: zod.string().nonempty({ message: "Telefone é obrigatório"} ).length(15, { message: "Seu telefone precisa ter 11 dígitos"}),
    cpf: zod.string().nonempty({ message: "CPF é obrigatório"} ).length(14, { message: "Seu CPF precisa ter 11 dígitos"})
  })

type IFormInputsData = zod.infer<typeof submitFormValidationSchema>

export function UserInfoForm() {
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputsData>({
        resolver: zodResolver(submitFormValidationSchema)
      });

  const form = useRef<any>();

  function handleSendUserInfo(data: IFormInputsData) {
    console.log(JSON.stringify(data))

    reset();
    setPhone('')
    setCpf('')

    navigate('/destination')
  }

  const navigate = useNavigate();

  return (
    <FormContainer onSubmit={handleSubmit(handleSendUserInfo)} ref={form}>
        <label>
            Nome
            <InputField>
                <User size={20} weight="bold" />
                <input 
                    type="text" 
                    placeholder="Digite o seu nome" 
                    autoFocus 
                    {...register('name')}
                />
            </InputField>
        </label>
        {errors.name?.message && <span>{errors.name?.message}</span>}

        <label>
            E-mail
            <InputField>
                <EnvelopeSimple size={20} weight="bold" />
                <input 
                    type="text" 
                    placeholder="Digite o seu e-mail" 
                    {...register('email')}
                />
            </InputField>
        </label>
        {errors.email?.message && <span>{errors.email?.message}</span>}

        <label>
            Telefone
            <InputField>
                <Phone size={20} weight="bold" />
                <input 
                    type="text" 
                    placeholder="Digite o seu telefone" 
                    {...register('phone', {onChange(event) {
                        setPhone(Mask.phone(event.target.value))
                    },})}
                    value={phone}
                />
            </InputField>
        </label>
        {errors.phone?.message && <span>{errors.phone?.message}</span>}

        <label>
            CPF
            <InputField>
                <IdentificationCard size={20} weight="bold" />
                <input 
                    type="text" 
                    placeholder="Digite o seu CPF" 
                    {...register('cpf', {onChange(event) {
                    setCpf(Mask.cpf(event.target.value))
                  },})}
                  value={cpf}
                />
            </InputField>
        </label>
        {errors.cpf?.message && <span>{errors.cpf?.message}</span>}

        <SendUserInfoButton type="submit">
            Enviar
        </SendUserInfoButton>
    </FormContainer>
  )
}
