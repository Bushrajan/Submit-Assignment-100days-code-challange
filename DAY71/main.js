"use strict";
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
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getfirstinfo() {
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
    constructor(name) {
        this.name = name;
    }
}
//-----------------------------------------------
const instancePublic = new MyClassPublic("\n\nJohn");
console.log(instancePublic.name);
//-----------------------------------------------
class MyClassPrivate {
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret);
    }
}
const instancePrivate = new MyClassPrivate("\nMy secret is secret... heheheh");
instancePrivate.revealSecret();
class Parent {
    constructor(name) {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice >= 0) {
            this._price = newPrice;
        }
        else {
            console.log("\n\nPrice cannot be negative.");
        }
    }
    getProductInfo() {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
ProductStaticMembers.nextId = 1;
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Muneeba");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Ayesha");
console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());
/*****************************
* CLASS IMPLEMENT INTERFACE *
*****************************/
class ProductImplementInterface {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductImplementInterface.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
ProductImplementInterface.nextId = 1;
const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Saad");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Muzamil");
console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());
/********************************
* ABSTRACT CLASSES AND MEMBERS *
********************************/
class AbstractItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
AbstractItem.nextId = 1;
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "Alia");
const item2 = new Item(AbstractItem.generateNextId(), "Bobie");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
/**********************************
* POLYMORPHISM & METHOD OVERRIDE *
**********************************/
class AbstractEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
AbstractEntity.nextId = 1;
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}
const entity1 = new Entity(AbstractEntity.generateNextId(), "Kerma");
const entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Wajahat");
console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());
/*****************************************************************************/ 
