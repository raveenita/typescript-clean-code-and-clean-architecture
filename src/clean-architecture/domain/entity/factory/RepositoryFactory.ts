import CouponRepository from "../../../infra/repository/CouponRepository";
import ItemRepository from "../../../infra/repository/ItemRepository";
import OrderRepository from "../../../infra/repository/OrderRepository";

export default interface RepositoryFactory {
    createItemRepository(): ItemRepository;
    createOrderRepository(): OrderRepository;
    createCouponRepository(): CouponRepository;
}