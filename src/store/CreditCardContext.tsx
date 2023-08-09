import { ReactNode, createContext, useContext, useState } from 'react';
import { CreditCard } from '../models/CreditCard';

interface CreditCardContextProps {
  creditCards: CreditCard[];
  addCreditCard: (card: CreditCard) => void;
}

interface CreditCardProviderProps {
    children: ReactNode;
    
  }

const CreditCardContext = createContext<CreditCardContextProps | undefined>(undefined);

export const CreditCardProvider = ({ children }: CreditCardProviderProps) => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

  const addCreditCard = (card: CreditCard) => {
    if (!creditCards.some(storedCard => storedCard.cardNumber === card.cardNumber)) {
      setCreditCards([...creditCards, card]);
    }
  };

  return (
    <CreditCardContext.Provider value={{ creditCards, addCreditCard }}>
      {children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCards = () => {
  const context = useContext(CreditCardContext);
  if (context === undefined) {
    throw new Error('useCreditCards must be used within a CreditCardProvider');
  }
  return context;
};
