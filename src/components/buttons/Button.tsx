import styles from "./Button.module.css";

interface ButtonProps {
    label : String;
    onButtonPressed: () => void;
  }

const Button = ({ label, onButtonPressed }: ButtonProps) => {
  return (
    <button className={`w-100 btn btn-secondary btn-lg ${styles.buttonMargin}`} type="button" onClick={onButtonPressed}>{label}</button>
  )
}

export default Button