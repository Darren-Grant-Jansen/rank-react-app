import { CreditCard } from "../models/CreditCard";

interface CreditCardListProps {
  cards: CreditCard[];
  heading?: String;
}

const CreditCardList = ({ cards, heading }: CreditCardListProps) => {
  return (
    <div className="row">
        <div className="col">
            { heading ? <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">{heading}</span>
            </h4> : false}
            <ul className="list-group mb-3">
                {cards.map((card) => (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{card.cardNumber}</h6>
                            <small className="text-body-secondary">{card.cardName}</small>
                        </div>
                        <span className="text-body-secondary">{card.expiryDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default CreditCardList;
