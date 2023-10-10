import OrderCode from "../../domain/entity/OrderCode";

test('Should create a order code', () => {
    const date = new Date('2023-10-10');
    const sequence = 1;
    const code = new OrderCode(date, sequence).value;

    expect(code).toBe('202300000001');
});