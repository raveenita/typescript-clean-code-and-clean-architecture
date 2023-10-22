import PayPalTransaction from "../../structural/adapter/PayPalTransaction";
import PayPalTransactionAdapter from "../../structural/adapter/PayPalTransactionAdapter";
import StripeTransaction from "../../structural/adapter/StripeTransaction";
import StripeTransactionAdapter from "../../structural/adapter/StripeTransactionAdapter";

test('Should create a Stripe transaction', function () {
    const stripeTransaction = new StripeTransaction('ANY_KEY', 1000, 2);
    const transaction = new StripeTransactionAdapter(stripeTransaction);

    expect(transaction.trackNumber).toBe('ANY_KEY');
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe('paid');
});

test('Should create a PayPal transaction', function () {
    const payPalTransaction = new PayPalTransaction('154214', 2000, "S");
    const transaction = new PayPalTransactionAdapter(payPalTransaction);
    
    expect(transaction.trackNumber).toBe('154214');
    expect(transaction.amount).toBe(2000);
    expect(transaction.status).toBe('paid');
});