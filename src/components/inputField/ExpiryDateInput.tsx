interface ExpiryDateInputProps {
    expiryDate: string;
    setExpiryDate: React.Dispatch<React.SetStateAction<string>>;
    isValid: boolean;
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpiryDateInput = ({expiryDate, setExpiryDate, isValid, setIsValid}: ExpiryDateInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Ensure the entered data matches the format mm/yy
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    setIsValid(regex.test(value) && checkDateValidity(value));

    setExpiryDate(value);
  };

  // Check if the expiry date is a future date
  const checkDateValidity = (value: string): boolean => {
    const [month, year] = value.split('/').map((v) => parseInt(v, 10));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get the last two digits of the year
    const currentMonth = currentDate.getMonth() + 1;

    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <input
        type="text"
        maxLength={5}
        value={expiryDate}
        onChange={handleChange}
        id="cc-expiration" 
        placeholder="MM/YY" 
        className="form-control"
        required
      />
      {!isValid && <p style={{ color: 'red' }}>Invalid expiry date</p>}
    </div>
  );
};

export default ExpiryDateInput;
