import OrderItem from "../OrderItem";

test('Should create a order item', () => {
    const orderItem = new OrderItem(1, 1000, 2);
    const total = orderItem.getTotal();

    expect(total).toBe(2000);
});