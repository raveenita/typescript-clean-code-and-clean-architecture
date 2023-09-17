import Item from "../../domain/entity/Item";
import ItemRepository from "./ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
  items: Item[];

  constructor() {
      this.items = [
          new Item(1, 'Música', 'CD', 30),
          new Item(2, 'Vídeo', 'DVD', 50),
          new Item(3, 'Vídeo', 'VHS', 10),
      ]
  }

  findById(id: number): Promise<Item | undefined> {
    return Promise.resolve(this.items.find(item => item.id === id));
  }
}