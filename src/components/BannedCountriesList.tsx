// src/components/BannedCountryConfig.tsx
import { useState } from "react";
import { bannedCountries } from "../utils/bannedCountries";
import Button from "./buttons/Button";

const BannedCountriesList = () => {
  const [newBannedCountry, setNewBannedCountry] = useState("");
  const [bannedCountryList, setBannedCountryList] = useState<string[]>(
    bannedCountries
  );

  const handleAddBannedCountry = () => {
    if (newBannedCountry.trim() !== "") {
      setBannedCountryList((prevList) => [...prevList, newBannedCountry.trim()]);
      setNewBannedCountry("");
    }
  };

  const handleRemoveBannedCountry = (country: string) => {
    setBannedCountryList((prevList) =>
      prevList.filter((item) => item !== country)
    );
  };

  return (
    <div>
      <div>
        <input type="text" className="form-control" id="cc-name" placeholder="Add a new banned country" onChange={(e) => setNewBannedCountry(e.target.value)} required />
        <Button onButtonPressed={handleAddBannedCountry} label={"Add"}></Button>
      </div>
      <ul className="list-group mb-3">
        {bannedCountryList.map((country, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 className="my-0">{country}</h6>
            </div>
            <button onClick={() => handleRemoveBannedCountry(country)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BannedCountriesList;
