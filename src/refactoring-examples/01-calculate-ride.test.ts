import { calculateRide, isOvernight, isSunday } from "./01-calculate-ride-refactored";

// test('Anatomia de um teste', function() {
    // given (dado que) - ARRANGE
    // when (quando algo acontecer...) - ACT
    // then (então algo deve ser verificado) - ASSERT
// });

test('Deve calcular o valor de uma corrida de taxi em dias normais', function() {
    const distance = 1000;
    const date = new Date('2021-07-10T10:00:00');
    const price = calculateRide(distance, date);

    expect(price).toBe(2100);
});

test('Deve calcular o valor de uma corrida de taxi nos domingos', function() {
    const distance = 1000;
    const date = new Date('2021-07-11T10:00:00');
    const price = calculateRide(distance, date);

    expect(price).toBe(2900);
});

test('Deve calcular o valor de uma corrida de taxi de noite', function() {
    const distance = 1000;
    const date = new Date('2021-07-11T23:00:00');
    const price = calculateRide(distance, date);

    expect(price).toBe(3900);
});

test('Deve lançar uma exceção se a distância for inválida', function() {
    const distance = '1000';
    const date = new Date('2021-07-11T23:00:00');

    expect(() => calculateRide(distance as any, date)).toThrow(new Error('Invalid parameter distance'));
});

test('Deve lançar uma exceção se a distância for negativa', function() {
    const distance = -1000;
    const date = new Date('2021-07-11T23:00:00');

    expect(() => calculateRide(distance as any, date)).toThrow(new Error('Invalid parameter distance'));
});

test('Deve lançar uma exceção se a data for inválida', function() {
    const distance = 1000;
    const date = '2021-07-11T23:00:00';

    expect(() => calculateRide(distance as any, date as any)).toThrow(new Error('Invalid parameter date'));
});

test('Deve ser noite', function() {
    const date = new Date('2021-07-10T23:00:00');
    const isOvernightResult = isOvernight(date);
    expect(isOvernightResult).toBeTruthy();
});

test('Deve ser domingo', function() {
    const date = new Date('2021-07-11T23:00:00');
    const isSundayResult = isSunday(date);
    expect(isSundayResult).toBeTruthy();
});