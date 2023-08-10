import { useState } from "react";
import BannedCountries  from "../services/BannedCountriesService";
import BannedCountriesList from "../components/listGroup/BannedCountriesList";
import Button from '../components/buttons/Button';
import styles from './pages.module.css';
import CountrySelect from "../components/dropdown/CountrySelect";
import { Country } from "../models/Country";

const BannedCountriesPage = () => {

  const [newBannedCountry, setNewBannedCountry] = useState<Country | null>(null)
  const [bannedCountryList, setBannedCountryList] = useState<string[]>(BannedCountries.list);

  const handleAddBannedCountry = () => {
    if (newBannedCountry && newBannedCountry?.label.trim() !== "") {
      setBannedCountryList((prevList) => [...prevList, newBannedCountry.label.trim()]);
      BannedCountries.add(newBannedCountry.label.trim())
      setNewBannedCountry(null);
    }
  };

  const handleRemoveBannedCountry = (country: string) => {
    BannedCountries.delete(country);
    setBannedCountryList((prevList) =>
      prevList.filter((item) => item !== country)
    );
  };
    
  return (
    <div className={`row ${styles.topPadding}`}>
      <div className="col-3">
      <CountrySelect selectedCountry={newBannedCountry} setSelectedCountry={setNewBannedCountry}/>
        <Button onButtonPressed={handleAddBannedCountry} label={"Add"} />
      </div>
      <div className="col-9">
        <BannedCountriesList bannedCountryList={bannedCountryList} handleRemoveBannedCountry={handleRemoveBannedCountry}></BannedCountriesList>
      </div>
    </div>
  )
}

export default BannedCountriesPage