import PriceCalculator from "./PriceCalculator";

export default class BeachPriceCalculator implements PriceCalculator {
    public calculate(hours: number): number {
        return 20;
    }
}