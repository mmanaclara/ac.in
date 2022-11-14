import { useState, useEffect } from 'react';
import { api } from '../lib/axios'
import { useCountries } from './useCountries';

interface Cities<
  Option = unknown,
  IsMulti extends boolean = false,
> {
    label: any;
    name_ptbr: string;
    country_code: string;
  }

export function useCities(url: string) {
    const [cities, setCities] = useState<Cities[]>([])
    const [error, setError] = useState<Error | null>(null)

    const { countries } = useCountries('/country')

    async function fetchCities() {
        await api.get(url)
            .then(response => {
                setCities(response.data.map((i: any) => ({ label: i.name_ptbr, value: i.country_code })))
            })
            .catch(err => {
                setError(err)
            })
    }

    useEffect(() => {
        fetchCities()
    }, [countries])

    return { cities, error };
}