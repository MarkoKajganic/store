import { Product } from '../models/product';

export class Buyer {

    id;
    firstName;
    lastName;
    email;
    products ;

    constructor(id: number, firstName: string, lastName: string, products: Array<Product> ){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];

    }

}
