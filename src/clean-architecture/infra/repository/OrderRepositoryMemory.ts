import Item from "../../domain/entity/Item";
import Order from "../../domain/entity/Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = []
    }
   
    save(order: Order): Promise<void> {
       this.orders.push(order);

       return Promise.resolve();
    }

    count() {
        return Promise.resolve(this.orders.length);
    }

}