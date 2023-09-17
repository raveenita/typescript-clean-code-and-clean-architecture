import PlaceOrder from "../../application/use-case/PlaceOrder";
import PlaceOrderInput from "../../application/use-case/PlaceOrderInput";
import CouponRepositoryMemory from "../../infra/repository/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../infra/repository/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../infra/repository/OrderRepositoryMemory";

test('should do a order', async function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
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