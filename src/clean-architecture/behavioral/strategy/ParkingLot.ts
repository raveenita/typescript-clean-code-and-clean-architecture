import PriceCalculator from "./PriceCalculator";

export class ParkingLot {
    parkedCars: { plate: string, checkInDate: Date }[];

    constructor(readonly capacity: number, readonly priceCalculator: PriceCalculator) {
        this.parkedCars = []
    }

    public checkIn(plate: string, checkInDate: Date) {
        this.parkedCars.push({ plate: plate, checkInDate });
    }

    public getEmptySpaces() {
        return this.capacity - this.parkedCars.length;
    }

    public checkout(plate: string, checkoutDate: Date) {
        const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);

        if (!parkedCar) throw new Error('Car not found');

        this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1);
        const parkedHours = (checkoutDate.getTime() - parkedCar.checkInDate.getTime()) / (1000*60*60);
        
        return this.priceCalculator.calculate(parkedHours);
    }

}