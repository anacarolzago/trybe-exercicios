import React from 'react';

type ProductsListProps = {
  children: React.ReactNode,
};

function ProductsList({ children }: ProductsListProps) {
  return (
    <div>
      <h1>Lista de produtos</h1>
      <ul>{children}</ul>
    </div>
  );
}

export default ProductsList;
