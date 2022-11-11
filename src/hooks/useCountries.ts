import { useState, useEffect } from 'react';
import { api } from '../lib/axios'

interface Countries {
    name: string;
    name_ptbr: string;
    code: string;
  }

export function useCountries(url: string) {
    const [countries, setCountries] = useState<Countries[]>([])
    const [error, setError] = useState<Error | null>(null)

    const filterCountries = (inputValue: string) => {
        return countries.filter((i) =>
        i.name_ptbr.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    
    const loadOptions = (
        inputValue: string,
        callback: (options: any) => void
      ) => {
        setTimeout(() => {
            return callback(countries.map(i => ({ label: i.name_ptbr, value: i.name_ptbr })));
        }, 1000);
      };

      async function fetchCountries(query?: string) {
        const APIresponse = await api.get(url, {
            params: {
              _sort: 'name_ptbr',
              _order: 'name_ptbr',
              q: query,
            }
        })

            .then(response => {
                setCountries(response.data.slice(0,10))
                console.log(countries)
            })
            .catch(err => {
                setError(err)
            })
      }

    useEffect(() => {
        fetchCountries()
    }, [])

    return { countries, loadOptions, filterCountries, error };
}