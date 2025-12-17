const rawJsonData = `
[
  { "id": 1, "name": "Laptop", "price": 1200 },
  { "id": 2, "name": "Mouse", "price": 25.50 },
  { "id": 3, "name": "Keyboard", "price": "50" } 
]
`;

interface Product {
    id : number;
    name : string;
    price : number;
}

const productsArray : Product[] = JSON.parse(rawJsonData)

function isValidProduct(data: any): data is Product {
    if (typeof data !== 'object' || data === null || Array.isArray(data)){
        return false;
    }

    if (typeof data.id !== 'number' || typeof data.name !== 'string' || typeof data.price !== 'number'){
        return false;
    }
    return true;
}

const safeProducts = productsArray.filter(data => isValidProduct(data))

//Now We have fixed the problem for incorrect data points passing to our application. 

//A: Interfaces to define the required data structure (Product).

//D: Type Inference (and assertion) to label the parsed data.

//C: Generics in the form of a Type Guard (data is Product) to perform runtime validation.

//Runtime Logic (.filter()) to produce a clean, type-safe array.