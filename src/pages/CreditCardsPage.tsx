import CreditCardList from "../components/CreditCardList";
import { CreditCardService } from "../services/CreditCardService";

const CreditCardsPage = () => {
    const capturedCards = CreditCardService.getCapturedCards();
  return (
    <CreditCardList cards={capturedCards} />
  )
}

export default CreditCardsPage