import Coupon from "../Coupon";
import Item from "../Item";
import { Order } from "../Order";

test('Should create a order with a valid CPF', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);
    const total = order.getTotal();

    expect(total).toBe(0);
});

test('Should try to create a empty order with an invalid CPF', () => {
    const cpf = '111.111.111-11';
    
    expect(() => new Order(cpf)).toThrow(new Error('Invalid CPF'));
});

test('Should create a order with 3 itens', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);

    order.addItem(new Item(1, 'Música', 'CD', 30), 3);
    order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1);
    order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2);

    const total = order.getTotal();
    expect(total).toBe(160);
});

test('Should create a order with 3 itens with a coupon', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);

    order.addItem(new Item(1, 'Música', 'CD', 30), 3);
    order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1);
    order.addItem(new Item(3, 'Vídeo', 'VHS', 10), 2);

    order.addCoupon(new Coupon('VALE20', 20, new Date('2024-12-01')));

    const total = order.getTotal();
    expect(total).toBe(128);
});