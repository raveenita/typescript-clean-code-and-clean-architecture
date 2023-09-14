export default class Coupon {

    constructor(readonly code: string, readonly percentage: number, readonly expireDate?: Date) {}

    isValid (today: Date = new Date()) {
        if (!this.expireDate) return true;

        return this.expireDate.getTime() >= today.getTime();
    }

    isExpired (today: Date = new Date()) {
        return !this.isValid(today);
    }

    calculateDiscount(amount: number): number {
        if(this.isExpired()) return amount;

        const updatedAmount = amount - this.applyDiscount(amount);
        
        return updatedAmount; 
    }

    applyDiscount(amount: number) {
        return (amount * this.percentage) / 100;
    }
}