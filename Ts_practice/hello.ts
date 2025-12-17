type interfaces ={
    name: string;
    age : number;
}

interface Car{
    model : string;
    price : number;
}

type DraftCar = Partial<Car>

const updateData: DraftCar = {
    model: "Tesla"
}

type CarGlass = Pick<Car, 'model' & 'price'>;

let one = {name:"gg", age:22}

console.log(one.name)

function identity<T>(arg:T) :T{
    return arg;
}

let rg = function <T>(arg:T): T{
    return arg;
}

function getFirst<T>(items:T[]):T{
    return items[0];
}