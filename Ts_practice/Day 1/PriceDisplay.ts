import React from 'react';

const PriceDisplay = (props: PriceDisplayProps) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Price: ${props.price.toFixed(2) ?? "N/A"}</p>
            <p>Price : {props.price? `$${props.price.toFixed(2)}`: "Price not avaliable"}
        <div>
    );
};

interface PriceDisplayProps {
    name : string;
    price : number;
}

type PartialProps = Partial<PriceDisplayProps>;

type PartialPrice = Pick<PriceDisplayProps, 'price'>;

interface ListProps<T> {
    items: T[]; // store in items
    render : (item:T) => React.ReactNode // function to render each item
}

function List<T>(props: ListProps<T>){
    return {
        <ul>
            {props.items.map((item) => props.render(item))}}
        </ul>
    )
}

