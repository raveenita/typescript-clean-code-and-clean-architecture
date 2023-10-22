export default class StripeTransaction {
    constructor(readonly code: string, readonly amount: number, readonly situation: number) {
        
    }
}