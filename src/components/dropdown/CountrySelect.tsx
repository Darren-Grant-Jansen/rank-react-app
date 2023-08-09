import { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country } from '../../models/Country';

interface CountrySelectProps {
    selectedCountry: Country | null;
    setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

const CountrySelect = ({selectedCountry, setSelectedCountry}: CountrySelectProps) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Fetch the countries when the component mounts
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Map the data to match the Select component's format
        const countryOptions = data.map((country: any) => ({
          value: country.cca2,
          label: country.name.common
        }));
        setCountries(countryOptions);
      })
      .catch(err => console.error('Error fetching countries:', err));
  }, []);

  const handleChange = (selectedOption: Country | null) => {
    setSelectedCountry(selectedOption);
    // Handle other logic like form submission here
  };

  return (
    <Select 
      options={countries} 
      onChange={handleChange}
      isSearchable={true}
      placeholder="Select a country..."
      value={selectedCountry}
    />
  );
}

export default CountrySelect;
  