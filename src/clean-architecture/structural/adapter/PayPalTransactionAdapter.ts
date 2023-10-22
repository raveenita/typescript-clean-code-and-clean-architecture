import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
    trackNumber: string;
    amount: number;
    status: string;

    constructor(payPalTransaction: PayPalTransaction) {
        this.trackNumber = payPalTransaction.code;
        this.amount = payPalTransaction.amount;
        this.status = this.convertStatus(payPalTransaction.status);
    }

    public convertStatus(status: string): string {
        const map: any = {
            "P": 'waiting_payment',
            "S": 'paid',
            "F": 'refunded'
        };

        return map[status];
    }
}
   