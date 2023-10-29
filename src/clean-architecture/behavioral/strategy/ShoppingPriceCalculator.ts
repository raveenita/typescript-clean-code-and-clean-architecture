import PriceCalculator from "./PriceCalculator";

export default class ShoppingPriceCalculator implements PriceCalculator {
    public calculate(hours: number): number {
        return hours * 10;
    }
}