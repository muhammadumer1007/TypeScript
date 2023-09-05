function getProduct<Type>(product: Type): Type {
  return product;
}

console.log(getProduct("hello"));
console.log(getProduct("hello"));
console.log(getProduct("hello"));
console.log(getProduct("hello"));
console.log(getProduct(222));
console.log(getProduct(true));

function getProductTwo<T>(product: T): T {
  return product;
}

console.log(getProductTwo(false));

// ================================================================ Gererics With Arrow Fuctions =================================================================

const getProductThree = <T>(product: T): T => {
  return product;
};

console.log(getProductThree("hello"));
console.log(getProductThree(222));
console.log(getProductThree(true));

const getProductFour = <T>(product: T): T => {
  return product;
};

interface User {
  name: string;
  password: string;
}
interface Admin {
  name: string;
  password: string;
  seeAllUsers: boolean;
}

function getProperty<T, key extends keyof T>(obj: T, key: key) {
  return obj[key];
}

let myObj = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(myObj , "m")); /Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.ts(2345)

console.log(getProperty(myObj, "d"));

interface quiz {
  name: string;
  price: number;
}

interface course {
  name: string;
  price: number;
  duration: number;
}

class Sellable<T> {
  public item: T[] = [];

  AddItem(item: T): void {
    this.item.push(item);
  }
}


let sellableObj = new Sellable();

sellableObj.AddItem("a");
sellableObj.AddItem(1);
sellableObj.AddItem("b");
sellableObj.AddItem("b");
sellableObj.AddItem("b");

console.log(sellableObj.item);


type notSellable = {
  
}



export {};
