import { useState, useEffect } from 'react';
import { api } from '../lib/axios'

interface Cities<
  Option = unknown,
  IsMulti extends boolean = false,
> {
    name_ptbr: string;
    country_code: string;
  }

export function useCities(url: string) {
    const [cities, setCities] = useState<Cities[]>([])
    const [error, setError] = useState<Error | null>(null)

    async function fetchCities() {
        await api.get(url)
            .then(response => {
                setCities(response.data.map((i: any) => ({ label: i.name_ptbr, value: i.country_code })))
            })
            .catch(err => {
                setError(err)
            })
    }

    const loadCityOptions = (
        inputValue: string,
        callback: (options: any) => void
    ) => {
        setTimeout(() => {
            callback(cities.map(i => ({ label: i.name_ptbr, value: i.country_code })))
        }, 1000);

        cities.filter((cityName) =>
        cityName.name_ptbr.toLowerCase().includes(inputValue.toLowerCase())
        );

        console.log(cities)
    };

    useEffect(() => {
        fetchCities()
    }, [])

    return { cities, fetchCities, loadCityOptions, error };
}

// const filterCountries = (inputValue: string) => {
//     return countries.filter((countryName) =>
//     countryName.name_ptbr.toLowerCase().includes(inputValue.toLowerCase())
//     );
// };

// async function fetchCountries() {
//     await api.get(url)
//         .then(response => {
//             setCountries(response.data)
//         })
//         .catch(err => {
//             setError(err)
//         })
// }

// const filterCountries = (
//     country: { label: string; value: string, data: any },
//     input: string
//   ) => {
//     if (input) {
//         return country.value === customOptions[0].value;
//       }
//       return true;
//   };