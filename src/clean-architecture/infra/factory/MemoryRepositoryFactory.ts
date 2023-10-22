import RepositoryFactory from "../../domain/entity/factory/RepositoryFactory";
import CouponRepository from "../repository/CouponRepository";
import CouponRepositoryMemory from "../repository/CouponRepositoryMemory";
import ItemRepository from "../repository/ItemRepository";
import ItemRepositoryMemory from "../repository/ItemRepositoryMemory";
import OrderRepository from "../repository/OrderRepository";
import OrderRepositoryMemory from "../repository/OrderRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }
    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
    createCouponRepository(): CouponRepository {
        return new CouponRepositoryMemory();
    }
 
}