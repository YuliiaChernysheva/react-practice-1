export type Currency = "USD" | "EUR" | "UAH";

interface convertCurrency {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: convertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 5, currency: "EUR" });
