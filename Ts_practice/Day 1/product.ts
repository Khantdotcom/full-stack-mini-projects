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