export default class Coupon {
    constructor(readonly code: string, readonly percentage: number) {}

    applyDiscount(total: number) {
        return (total * this.percentage) / 100;
    }
}