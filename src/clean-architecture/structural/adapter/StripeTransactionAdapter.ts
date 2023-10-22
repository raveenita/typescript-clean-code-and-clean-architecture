import StripeTransaction from "./StripeTransaction";
import Transaction from "./Transaction";

export default class StripeTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor(stripeTransaction: StripeTransaction) {
        this.trackNumber = stripeTransaction.code;
        this.amount = stripeTransaction.amount;
        this.status = this.convertStatus(stripeTransaction.situation);
    }

    public convertStatus(situation: number): string {
        const map: any = {
            1: 'waiting_payment',
            2: 'paid',
            3: 'cancelled'
        };

        return map[situation];
    }
}