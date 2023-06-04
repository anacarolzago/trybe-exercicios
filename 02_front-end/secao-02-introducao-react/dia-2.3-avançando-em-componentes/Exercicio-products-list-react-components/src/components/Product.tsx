import React from 'react';

type ProductProps = {
  productInfo: {
    id: number,
    title: string,
    image: string,
    price: number,
  }
};

function Product({ productInfo }: ProductProps) {
  const { title, image, price } = productInfo;

  return (
    <li>
      <p>{title}</p>
      <p>{price}</p>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
