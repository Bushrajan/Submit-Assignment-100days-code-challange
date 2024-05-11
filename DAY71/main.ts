/*Day-71 of 100-Days-Of-Code Challenge
Day-71 Task:

Learn about TypeScript classes by using the following guide and coding along with the examples provided in it:

Class Type Annotations in TypeScript
Make sure to commit your code to GitHub and tag and mention us on LinkedIn.*/

/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
console.log(`\nxxxxxxxxxxxxxxxxxxxxxxxxx Day71 xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
console.log(`xxxxxxxxxxxxxxxxxxxxxxxxx CLASS TYPE ANNOTATIONS xxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n`);

class First {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getfirstinfo(): string {
        return `\nName: ${this.name}, ID: ${this.id} `;
    }
}
//@ts-ignore
const first1 = new First('Boby', 3);
console.log(first1.getfirstinfo());

/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
//-----------------------------------------------

const instancePublic = new MyClassPublic("\n\nJohn");
console.log(instancePublic.name);
//-----------------------------------------------

class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret);
    }
}

const instancePrivate = new MyClassPrivate("\nMy secret is secret... heheheh");
instancePrivate.revealSecret();


class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`\n\nOur family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

childEx.introduceFamily();

/*******************
 * CLASS ACCESSORS *
 *******************/

class ProductExAccessors {
    private _price: number;

    constructor(private id: number, private name: string) {
        this._price = 0;
    }

    get price(): number {
        return this._price;
    }


    set price(newPrice: number) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.log("\n\nPrice cannot be negative.");
        }
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}


const productEx = new ProductExAccessors(1, "Madiha");
console.log(productEx.getProductInfo());
productEx.price = 20.0;

console.log(productEx.getProductInfo());
productEx.price = -5;

/************************
* CLASS STATIC MEMBERS *
************************/

class ProductStaticMembers {

    private static nextId: number = 1;

    constructor(private id: number, private name: string) { }

    static generateNextId(): number {
        return ProductStaticMembers.nextId++;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Muneeba");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Ayesha");

console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());


/*****************************
* CLASS IMPLEMENT INTERFACE *
*****************************/

class ProductImplementInterface {

    private static nextId: number = 1;
    constructor(private id: number, private name: string) { }

    static generateNextId(): number {
        return ProductImplementInterface.nextId++;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Saad");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Muzamil");

console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());

/********************************
* ABSTRACT CLASSES AND MEMBERS *
********************************/

abstract class AbstractItem {
    private static nextId: number = 1;

    constructor(public id: number, protected name: string) { }

    static generateNextId(): number {
        return AbstractItem.nextId++;
    }

    abstract getItemInfo(): string;
}

class Item extends AbstractItem {
    constructor(id: number, name: string) {
        super(id, name);
    }

    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Alia");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Bobie");

console.log(item1.getItemInfo());
console.log(item2.getItemInfo());

/**********************************
* POLYMORPHISM & METHOD OVERRIDE *
**********************************/

abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) { } 
    static generateNextId(): number {
        return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
}

class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}

const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Kerma");
const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Wajahat");

console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo()); 

/*****************************************************************************/ 