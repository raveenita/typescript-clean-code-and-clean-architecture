import PlaceOrder from "../../application/use-case/PlaceOrder";
import PlaceOrderInput from "../../application/use-case/PlaceOrderInput";
import MemoryRepositoryFactory from "../../infra/factory/MemoryRepositoryFactory";

test('should do a order', async function() {
    const placeOrder = new PlaceOrder(new MemoryRepositoryFactory());
    const input: PlaceOrderInput = {
        cpf: "839.435.452-10",
        orderItems: [
            { idItem: 1, quantity: 1},
            { idItem: 2, quantity: 1},
            { idItem: 3, quantity: 3},
        ],
        date: new Date("2024-12-10"),
        coupon: 'VALE20'
    };

    const output = await placeOrder.execute(input);
    
    expect(output.total).toBe(88);
});

test('should do a order with code', async function() {
    const placeOrder = new PlaceOrder(new MemoryRepositoryFactory());
    const input: PlaceOrderInput = {
        cpf: "839.435.452-10",
        orderItems: [
            { idItem: 1, quantity: 1},
            { idItem: 2, quantity: 1},
            { idItem: 3, quantity: 3},
        ],
        date: new Date("2024-12-10"),
        coupon: 'VALE20'
    };

    const output = await placeOrder.execute(input);
    
    expect(output.total).toBe(88);
});