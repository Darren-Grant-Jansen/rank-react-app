import { ImBin } from "react-icons/im";

interface BannedCountriesListProps {
  bannedCountryList: string[];
  handleRemoveBannedCountry: (country: string) => void;
}

const BannedCountriesList = ({ bannedCountryList, handleRemoveBannedCountry}: BannedCountriesListProps) => {
  return (
    <div>
      <ul className="list-group mb-3">
        {bannedCountryList.map((country, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 className="my-0">{country}</h6>
            </div>
            <ImBin size="20" onClick={() => handleRemoveBannedCountry(country)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BannedCountriesList;