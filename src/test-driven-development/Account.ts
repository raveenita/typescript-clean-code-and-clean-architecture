import CurrencyAPI from "./CurrencyAPI";

export default class {
    balance: number;

    // This is an dependency inversion.
    constructor(readonly currencyApi: CurrencyAPI) {
        this.balance = 0;
        this.currencyApi = currencyApi;
    }

    credit(amount: number, currency?: string) {
        if (currency == 'USD') {
          amount = this.currencyApi.convert(amount, currency);
        }

        this.balance += amount;
    }

    debit(amount: number) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}