type Product = {
    id : string;
    name : string;
    category : 'electronics' | 'home' |'kids';
    price : number;
    inStock : boolean;
    description : string;
}

type previewCard = Pick<Product,'name'|'category' |'price'>

type onlyString = Pickbytype<Product,string>;
