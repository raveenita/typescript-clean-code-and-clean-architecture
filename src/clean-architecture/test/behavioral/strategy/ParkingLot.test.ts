// Define a algorithm family, encapsulate each one, and make them interchangeable.
// Policy pattern

import AirportPriceCalculator from "../../../behavioral/strategy/AirportPriceCalculator";
import BeachPriceCalculator from "../../../behavioral/strategy/BeachPriceCalculator";
import { ParkingLot } from "../../../behavioral/strategy/ParkingLot";
import ShoppingPriceCalculator from "../../../behavioral/strategy/ShoppingPriceCalculator";

it('Should create a empty parking lot', () => {
  const parkingLot = new ParkingLot(500, new BeachPriceCalculator());
  expect(parkingLot.getEmptySpaces()).toBe(500);
});

it('Should enter a car', () => {
    const parkingLot = new ParkingLot(500, new BeachPriceCalculator());
    parkingLot.checkIn('AAA-0001', new Date());
    expect(parkingLot.getEmptySpaces()).toBe(499);
});

it('Should exit a car', () => {
    const parkingLot = new ParkingLot(500, new BeachPriceCalculator());

    parkingLot.checkIn('AAA-0001', new Date('2022-01-01T10:00:00'));
    parkingLot.checkout('AAA-0001', new Date('2022-01-01T15:0:00'));

    expect(parkingLot.getEmptySpaces()).toBe(500);
});

it('Should calculate a value to be paid when the car stayed 20 per ilimited time at beach', () => {
    const parkingLot = new ParkingLot(500, new BeachPriceCalculator());
    
    parkingLot.checkIn('AAA-0001', new Date('2022-01-01T10:00:00'));
    const price = parkingLot.checkout('AAA-0001', new Date('2022-01-01T15:00:00'));

    expect(price).toBe(20);
});

it('Should calculate a value to be paid when the car stayed for 5 hour at 10 per hour at shopping', () => {
    const parkingLot = new ParkingLot(500, new ShoppingPriceCalculator());
    
    parkingLot.checkIn('AAA-0001', new Date('2022-01-01T10:00:00'));
    const price = parkingLot.checkout('AAA-0001', new Date('2022-01-01T15:00:00'));

    expect(price).toBe(50);
});

it('Should calculate a value to be paid when the car stayed for 3 hour at 20 per hour at airport', () => {
    const parkingLot = new ParkingLot(500, new AirportPriceCalculator());
    
    parkingLot.checkIn('AAA-0001', new Date('2022-01-01T10:00:00'));
    const price = parkingLot.checkout('AAA-0001', new Date('2022-01-01T15:00:00'));

    expect(price).toBe(40);
});