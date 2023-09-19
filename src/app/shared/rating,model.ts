import { Account } from "../auth/account.model";
import { Product } from "../product/product.model";

export class Rating {

    constructor(public content: string, public star: number, public date: Date, public account: Account, public product: Product){}
}