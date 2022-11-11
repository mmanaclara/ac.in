import { useState, useEffect } from 'react';
import { api } from '../lib/axios'

interface Countries<
  Option = unknown,
  IsMulti extends boolean = false,
> {
    name_ptbr: string;
    code: string;
  }

export function useCountries(url: string) {
    const [countries, setCountries] = useState<Countries[]>([])
    const [error, setError] = useState<Error | null>(null)

    async function fetchCountries() {
        await api.get(url)
            .then(response => {
                setCountries(response.data.map((i: any) => ({ label: i.name_ptbr, value: i.code })))
            })
            .catch(err => {
                setError(err)
            })
    }

    const loadOptions = (
        inputValue: string,
        callback: (options: any) => void
    ) => {
        setTimeout(() => {
            callback(countries.map(i => ({ label: i.name_ptbr, value: i.code })))
        }, 1000);

        countries.filter((countryName) =>
        countryName.name_ptbr.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    useEffect(() => {
        fetchCountries()
    }, [])

    return { countries, fetchCountries, loadOptions, error };
}