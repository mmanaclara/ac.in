import { ChatTeardropDots, GlobeSimple, Factory } from 'phosphor-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import Select from 'react-select'
import { languageOptions } from '../../docs/LanguageOptions'
import AsyncSelect from 'react-select/async';

import { useCountries } from '../../hooks/useCountries'
import { useCities } from '../../hooks/useCities'

import { FormContainer, InputField, SendUserInfoButton } from './styles' 

export function DestinationForm() {
  const { countries, fetchCountries } = useCountries('/country')
  const { cities, fetchCities, loadCityOptions } = useCities('/city')

  console.log(countries)

  const [isSearchable, setIsSearchable] = useState(true)
  const [selectedOption, setSelectedOption] = useState(null);

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
                    name="language"
                    classNamePrefix='responsive'
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
                  name="countries"
                  isMulti
                  defaultValue={selectedOption}
                  onChange={(e: any) => setSelectedOption(e)}
                  options={countries}
                  placeholder="Selecione um ou mais países"
                  isSearchable={isSearchable}
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
                    })
                  }
                />

            </InputField>
        </label>

        <label>
            Cidade
            <InputField>
                <Factory size={20} weight="bold" />
                <Select
                  name="cities"
                  isMulti
                  defaultValue={selectedOption}
                  onChange={(e: any) => setSelectedOption(e)}
                  options={cities}
                  placeholder="Selecione um ou mais países"
                  isSearchable={isSearchable}
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
                    })
                  }
                />
            </InputField>
        </label>

        <Link to="/destination">
          <SendUserInfoButton disabled>
            Enviar
          </SendUserInfoButton>
        </Link>
    </FormContainer>
  )
}

        {/* <select>
          {countries.map(country => (
            <option value={country.name_ptbr}>{country.name_ptbr}</option>
          ))}
        </select> */}