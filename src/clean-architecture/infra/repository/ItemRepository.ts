import Item from "../../domain/entity/Item";

export default interface ItemRepository {
  findById(idItem: number): Promise<Item | undefined>;
}