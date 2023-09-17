import FreightCalculator from "./DefaultFreightCalculator";
import Item from "./Item";

export default class DefaultFreightCalculator implements FreightCalculator {
    calculate(item: Item): number {
        if (!this.validate(item)) return 0;

        const freight = (1000 * item.getVolume() * (item.getDensity() / 100));
        const minFreight = 10;

        return Math.max(minFreight, freight);
    }

    validate(item: Item) {
        if (!item.width || !item.height || !item.length || !item.weight) return false;
        
        return true;
    }
}