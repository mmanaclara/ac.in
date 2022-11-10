import { ChatTeardropDots, GlobeSimple, Factory } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import { FormContainer, InputField, SendUserInfoButton } from './styles'

export function DestinationForm() {
  const languageOptions = [
    { value: 'ENG', label: 'Inglês' },
    { value: 'CHI', label: 'Chinês' },
    { value: 'ESP', label: 'Espanhol' },
    { value: 'ITA', label: 'Italiano' },
    { value: 'FRA', label: 'Francês' },
    { value: 'DEU', label: 'Alemão' },
    { value: 'JAP', label: 'Japonês' },
    { value: 'COR', label: 'Coreano' },
    { value: 'ARA', label: 'Árabe' },
    { value: 'RUS', label: 'Russo' },
  ]  
  
  const customStyles = {
    option: (provided: any, state: { isSelected: any, isFocused: any }) => ({
      ...provided,
      color: state.isSelected ? '#39393a' : '#707175',
      background: state.isSelected ? '#FFF8DE' : '',
    }),
    control: () => ({
      width: 295,
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
      color: '#707175',
      display: 'flex',
      cursor: 'pointer',
    }),
    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.9 : 0.9;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  return (
    <FormContainer>
        <label>
            Idioma
            <InputField>
                <ChatTeardropDots size={20} weight="bold" />
                <Select
                    name="colors"
                    options={languageOptions}
                    placeholder="Selecione o idioma do curso"
                    styles={customStyles}
                    autoFocus
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary: '#FFF8DE',
                          primary25: '#FFF8DE',
                          primary50: '#FFF8DE',
                          neutral20: '#707175',
                        },
                      })}
                />
            </InputField>
        </label>

        <span>Onde você quer viver a sua próxima aventura?</span>

        <label>
            País
            <InputField>
                <GlobeSimple size={20} weight="bold" />
                <Select
                    name="colors"
                    options={languageOptions}
                    placeholder="Selecione um ou mais países"
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary: '#FFF8DE',
                          primary25: '#FFF8DE',
                          primary50: '#FFF8DE',
                          neutral20: '#707175',
                        },
                      })}
                />
            </InputField>
        </label>

        <label>
            Cidade
            <InputField>
                <Factory size={20} weight="bold" />
                <Select
                    name="colors"
                    options={languageOptions}
                    placeholder="Selecione uma ou mais cidades"
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary: '#FFF8DE',
                          primary25: '#FFF8DE',
                          primary50: '#FFF8DE',
                          neutral20: '#707175',
                        },
                      })}
                />
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