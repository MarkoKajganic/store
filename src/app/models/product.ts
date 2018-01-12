export class Product {

    id;
    name;
    quantity;

    constructor (id: number, name: string, quantity: number){

        this.id = id;
        this.name = name;
        this.quantity = quantity;

        return this;
    }
}
