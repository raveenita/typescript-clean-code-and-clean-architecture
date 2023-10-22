export default class PayPalTransaction {
    constructor(readonly code: string, readonly amount: number, readonly status: string) {
        
    }
}