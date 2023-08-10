interface CvvInputProps {
    cvv: string;
    setCvv: React.Dispatch<React.SetStateAction<string>>;
    isCvvValid: boolean;
    setIsCvvValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const CvvInput = ({cvv, setCvv, isCvvValid, setIsCvvValid}: CvvInputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // CVV can be 3-4 digits depending on the card type
    const regex = /^\d{3,4}$/;
    setIsCvvValid(regex.test(value));

    setCvv(value);
  };

  return (
    <div>
      <input
        type="text"
        maxLength={4}
        value={cvv}
        onChange={handleChange}
        id="cc-cvv"
        placeholder="123"
        className="form-control"
        required
      />
      {!isCvvValid && <p style={{ color: 'red' }}>Invalid CVV</p>}
    </div>
  );
};

export default CvvInput;
