import CreditCardForm from "../components/forms/CreditCardForm";
import styles from "./pages.module.css";

const HomePage = () => {
  return (
    <div className={styles.topPadding}>
      <CreditCardForm />
    </div>
    
  )
}

export default HomePage