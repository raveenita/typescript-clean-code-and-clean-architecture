import Coupon from "./Coupon";
import Cpf from "./Cpf";
import DefaultFreightCalculator from "./DefaultFreightCalculator";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import OrderCode from "./OrderCode";
import OrderItem from "./OrderItem";

export default class Order {
    public cpf: Cpf;
    private code: string;
    private freight: number = 0;
    public coupon: Coupon | undefined;
    public orderItems: Array<OrderItem> = [];
    
    constructor(cpf: string, readonly date: Date = new Date(), readonly freightCalculador: FreightCalculator = new DefaultFreightCalculator(), readonly sequence: number = 1) { 
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.freight = 0;
        this.code = new OrderCode(date, sequence).value;

    }

    getCode() {
        return this.code;
    }

    addItem (item: Item, quantity: number) {
        const freight = this.freightCalculador.calculate(item);
        this.freight +=  freight * quantity;
        this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    }

    getFreight() {
        return this.freight;
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
            console.log(total);
            console.log(this.coupon.calculateDiscount(total, this.date));
            total -= this.coupon.calculateDiscount(total, this.date);
        }

        return total;
    }
}