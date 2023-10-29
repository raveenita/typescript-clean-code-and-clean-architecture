import PriceCalculator from "./PriceCalculator";

export default class AirportPriceCalculator implements PriceCalculator {
    calculate(hours: number): number {
        const remainingHours = hours - 3;
        let price = 20;

        if (remainingHours <= 0) return price;
        
        price += remainingHours * 10;

        return price;
    }
}