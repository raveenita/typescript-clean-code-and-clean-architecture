import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export class Order {
    cpf: Cpf;
    coupon: Coupon | undefined;
    orderItems: Array<OrderItem> = [];
    
    constructor(cpf: string) { 
        this.cpf = new Cpf(cpf);
    }

    addItem (item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    }

    addCoupon (coupon: Coupon) {
        this.coupon = coupon;
    }

    getTotal(): number { 
        let total = 0;

        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }

        if (this.coupon) {
            total = this.coupon.calculateDiscount(total);
        }

        return total;
    }
}