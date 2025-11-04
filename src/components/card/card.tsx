interface CardProps {
    price: string;
    ingredients: string;
}

export default function Card({ price, ingredients }: CardProps) {
    return (
        <>
            <p>{price}</p>
            <p>{ingredients}</p>
        </>
    );
}
