import { bannedCountries } from "../utils/bannedCountries";
import { CreditCard } from "../models/CreditCard";

class CreditCardService {
  private static capturedCards: CreditCard[] = [];

  static storeCardDetails(cardNumber: string, country: string, cardName: string, expiryDate: string): void {
    CreditCardService.capturedCards.push({ cardNumber, country, cardName, expiryDate });
  }

  static isCardNumberDuplicate(cardNumber: string): boolean {
    return CreditCardService.capturedCards.some(
      (card) => card.cardNumber === cardNumber
    );
  }

  static isCountryBanned(country: string): boolean {
    return bannedCountries.includes(country);
  }

  static getCapturedCards(): CreditCard[] {
    return CreditCardService.capturedCards;
  }
}

export { CreditCardService };
