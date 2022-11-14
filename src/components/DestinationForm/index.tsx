import { ChatTeardropDots, GlobeSimple, Factory } from 'phosphor-react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import Select from 'react-select'
import { languageOptions } from '../../docs/LanguageOptions'

import { useCountries } from '../../hooks/useCountries'
import { useCities } from '../../hooks/useCities'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import { FormContainer, InputField, SendUserInfoButton } from './styles' 

export function DestinationForm() {
  const { countries } = useCountries('/country')
  const { cities } = useCities('/city')
  
  const [language, setLanguage] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState<any>([]);

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

  const form = useRef<any>();

  const navigate = useNavigate();

  const countryCodes = countries.map(({ value }: any) => value) //Códigos dos países
  console.log(countryCodes)

  console.log(selectedCity["value"])

  const selectedCountryValue = selectedCountry.filter(({ value }: any) => value) //Códigos dos países
  // console.log(selectedCountryValue.map((item: any) => item.value))

  const selectedCountryValueReal = selectedCountryValue[0]?.value

  // const cityCountryCodes = cities.map(({ value }: any) => value)
  // console.log(cityCountryCodes)

  // const cityName = cities.map(({ label }) => label);
  // console.log(cityName)

  const filteredCities = cities.filter(({ value }: any) => value.countryCode === selectedCountryValueReal)
  console.log({filteredCities})
     
  function handleSendDestination() {
    navigate('/success')
  }

  const isSubmitDisabled = !selectedCountry

  function handleCountryChanges(values: any) {
    const countryCodes = values.map(({ value }: any) => value);

    const filteredCities = cities
      .filter(({ countryCode }: any) => countryCodes.includes(countryCode))
      
    if (!filteredCities) {
      setSelectedCity([{ value: 'Capital', label: 'Capital' }]);
    } else {
      setSelectedCity(filteredCities);
    }
  }

  function handleCityChange(values: any) {
    const cityName = values.map(({ label }: any) => label);
    setSelectedCity((prevState: any) => ({ ...prevState, city: cityName }));
  }

  return (
    <FormContainer onSubmit={handleSendDestination} ref={form}>
        <label>
            Idioma
            <InputField>
                <ChatTeardropDots size={20} weight="bold" />
                <Select
                    name="language"
                    options={languageOptions}
                    placeholder="Selecione o idioma do curso"
                    value={language}
                    onChange={(e: any) => setLanguage(e)}
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
                  required
                  value={selectedCountry}
                  onChange={(e: any) => setSelectedCountry(e)}
                  options={countries}
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
                  required
                  value={selectedCity}
                  onChange={(e: any) => setSelectedCity(e)}
                  options={cities}
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
                    })
                  }
                />
            </InputField>
        </label>

        <SendUserInfoButton type="submit" disabled={isSubmitDisabled}>
          Enviar
        </SendUserInfoButton>

    </FormContainer>
  )
}