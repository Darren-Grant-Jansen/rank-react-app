import  { useState } from "react";
import { CreditCardService } from "../../services/CreditCardService";
import Button from "../buttons/Button";
import ExpiryDateInput from "../inputField/ExpiryDateInput";
import CountrySelect from "../dropdown/CountrySelect";
import { Country } from '../../models/Country';


const CreditCardForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [expiryDate, setExpiryDate] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const isCardNameValid = () => cardName !== "";
  const isCardNumberValid = () => /^(\d{4}\s?){4}$/.test(cardNumber); // Basic check for a 16 digit card number
  const isCVVValid = () => /^\d{3,4}$/.test(cvv);

  const handleSubmit = () => {
    console.log(selectedCountry);
    console.log(isValid);
    console.log(expiryDate);
    
    setErrorMessage("");

    if (!isCardNameValid() || !isCardNumberValid() || !isCVVValid() || !isValid || !selectedCountry) {
      setErrorMessage("Please ensure all fields are correctly filled.");
      return;
    }

    if (CreditCardService.isCardNumberDuplicate(cardNumber)) {
      setErrorMessage("This card has already been captured.");
      return;
    }

    if (CreditCardService.isCountryBanned(selectedCountry.label)) {
      setErrorMessage("This country is in the list of banned countries.");
      return;
    }

    CreditCardService.storeCardDetails(cardNumber, selectedCountry.label, cardName, expiryDate);
    setCardName("");
    setCardNumber("");
    setCvv("");
    setSelectedCountry(null);
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <h4 className="mb-3">Submit credit card</h4>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input 
                type="text" 
                className="form-control" 
                id="cc-name" 
                placeholder=""  
                value={cardName} 
                onChange={(e) => setCardName(e.target.value)} 
                required 
              />
              <small className="text-body-secondary">Full name as displayed on card</small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" 
                className="form-control" 
                id="cc-number" 
                placeholder="" 
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)}
                required />
              <div className="invalid-feedback">Credit card number is required</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <ExpiryDateInput expiryDate={expiryDate} setExpiryDate={setExpiryDate} isValid={isValid} setIsValid={setIsValid}/>
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" 
                className="form-control" 
                id="cc-cvv" 
                placeholder=""
                value={cvv} 
                onChange={(e) => setCvv(e.target.value)} 
                required />
              <div className="invalid-feedback">Security code required</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-cvv" className="form-label">Country</label>
              <CountrySelect selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
            </div>
          </div>

          <div className="col">
            <Button label={"Submit"} onButtonPressed={handleSubmit}/>
          </div>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default CreditCardForm;
