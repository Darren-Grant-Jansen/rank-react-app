import CreditCardList from "../components/listGroup/CreditCardList";
import { CreditCardService } from "../services/CreditCardService";
import styles from "./pages.module.css";

const CreditCardsPage = () => {
    const capturedCards = CreditCardService.getCapturedCards();
  return (
    <div className={styles.topPadding}>
      {
        capturedCards.length == 0 ? <p>No cards captured yet. . .</p> : <CreditCardList cards={capturedCards} />
      }
    </div>
   
  )
}

export default CreditCardsPage