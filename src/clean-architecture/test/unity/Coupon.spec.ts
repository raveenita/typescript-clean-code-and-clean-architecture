import Coupon from "../../domain/entity/Coupon";

test('Should create a valid coupon', () => {
    const today = new Date('2021-12-01');
    const coupon = new Coupon('VALE20', 20, new Date('2021-12-10'));
    const isCouponValid = coupon.isValid(today);
    
    expect(isCouponValid).toBeTruthy();
});

test('Should create a expired coupon', () => {
    const today = new Date('2021-12-01');
    const coupon = new Coupon('VALE20', 20, new Date('2021-03-01'));
    const isCouponExpired = coupon.isExpired(today);
    
    expect(isCouponExpired).toBeTruthy();
});