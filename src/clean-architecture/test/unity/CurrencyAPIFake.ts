import CurrencyAPI from "../../domain/entity/CurrencyAPI";

export default class CurrencyAPIFake implements CurrencyAPI {
    convert(amount: number, currency: string): number {
        return amount * 5;
    }

}