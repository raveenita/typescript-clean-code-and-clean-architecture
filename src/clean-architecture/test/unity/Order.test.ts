import Coupon from "../../domain/entity/Coupon";
import DefaultFreightCalculator from "../../domain/entity/DefaultFreightCalculator";
import Item from "../../domain/entity/Item";
import Order from "../../domain/entity/Order";

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

test('Should create a order with 3 itens with freight calculation', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf, new Date(), new DefaultFreightCalculator());

    order.addItem(new Item(4, 'Instrumentos musicais', 'Guitarra', 5000, 100, 30, 10, 3), 1);
    order.addItem(new Item(5, 'Instrumentos musicais', 'Amplificador', 1000, 100, 50, 50, 20), 1);
    order.addItem(new Item(6, 'Acessórios', 'Cabo', 10, 10, 10, 10, 0.9), 3);
    
    const freight = order.getFreight();
    expect(freight).toBe(260);
});

test('Should create a order with code', () => {
    const cpf = '839.435.452-10';
const order = new Order(cpf, new Date(), new DefaultFreightCalculator());

    order.addItem(new Item(4, 'Instrumentos musicais', 'Guitarra', 5000, 100, 30, 10, 3), 1);
    order.addItem(new Item(5, 'Instrumentos musicais', 'Amplificador', 1000, 100, 50, 50, 20), 1);
    order.addItem(new Item(6, 'Acessórios', 'Cabo', 10, 10, 10, 10, 0.9), 3);
    
    const code = order.getCode();
    expect(code).toBe("202300000001");
});
