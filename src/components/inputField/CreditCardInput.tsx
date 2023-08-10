interface CreditCardInputProps {
    cardNumber: string;
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    isCardNumberValid: boolean;
    setIsCardNumberValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreditCardInput = ({cardNumber, setCardNumber, isCardNumberValid, setIsCardNumberValid}: CreditCardInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setIsCardNumberValid(luhnCheck(value));
    setCardNumber(value);
  };

  // Implementing the Luhn algorithm
  const luhnCheck = (value: string): boolean => {
    let sum = 0;
    let shouldDouble = false;

    // Start from the rightmost number and work our way left
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  return (
    <div>
      <input
        type="text"
        maxLength={16}
        value={cardNumber}
        onChange={handleChange}
        id="cc-number"
        placeholder="4111 1111 1111 1111"
        className="form-control"
        required
      />
      {!isCardNumberValid && <p style={{ color: 'red' }}>Invalid Credit Card Number</p>}
    </div>
  );
};

export default CreditCardInput;
