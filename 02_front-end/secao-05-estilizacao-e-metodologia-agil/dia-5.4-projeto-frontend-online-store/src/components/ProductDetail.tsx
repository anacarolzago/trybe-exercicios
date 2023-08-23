import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { Product, ProductProps } from '../helpers/props';

function ProductDetails({ quantity }: ProductProps) {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | undefined>(undefined);
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  function addToCart(productToAdd: ProductProps) {
    const productOne: ProductProps = {
      ...productToAdd,
      quantity: 1,
    };

    setCartItems([...cartItems, productOne]);
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, productOne]));
  }

  useEffect(() => {
    async function fetchProductDetails() {
      const productDetails = await getProductById(id);
      setProduct(productDetails);
    }

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <Link data-testid="shopping-cart-button" to="/ShoppingCart">
        Carrinho de Compras
        <span data-testid="shopping-cart-size">
          (
          { quantity }
          )
        </span>
      </Link>
      <h1 data-testid="product-detail-name">{ product?.title }</h1>
      <h2 data-testid="product-detail-price">{ `R$ ${product?.price}` }</h2>
      <img
        data-testid="product-detail-image"
        src={ product?.thumbnail }
        alt="imagem produto"
      />
      <button
        onClick={ () => product && addToCart(product) }
        data-testid="product-detail-add-to-cart"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ProductDetails;
