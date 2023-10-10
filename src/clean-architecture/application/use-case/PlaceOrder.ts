import DefaultFreightCalculator from "../../domain/entity/DefaultFreightCalculator";
import Order from "../../domain/entity/Order";
import CouponRepository from "../../infra/repository/CouponRepository";
import ItemRepository from "../../infra/repository/ItemRepository";
import OrderRepository from "../../infra/repository/OrderRepository";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrder {
    constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository,  readonly couponRepository: CouponRepository) {}

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const sequence = await this.orderRepository.count();

        const order = new Order(input.cpf, input.date, new DefaultFreightCalculator(), sequence);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.findById(orderItem.idItem);

            if(!item) throw new Error('Item not found');

            order.addItem(item, orderItem.quantity)
        }

        if (input.coupon) {
            const coupon = await this.couponRepository.findByCode(input.coupon);
            if (coupon) order.addCoupon(coupon);
        }

        await this.orderRepository.save(order);

        const total = order.getTotal();
        const output = new PlaceOrderOutput(order.getCode(), total);

        return output;
    }
}