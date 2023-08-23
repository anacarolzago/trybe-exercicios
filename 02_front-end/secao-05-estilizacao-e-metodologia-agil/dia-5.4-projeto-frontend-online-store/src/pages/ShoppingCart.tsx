import React, { useState, useEffect } from 'react';
import { ShoppingCartProps, ProductProps } from '../helpers/props';

function ShoppingCart({ cartItems }: ShoppingCartProps) {
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('cartItems');
    if (getLocalStorage) {
      setCartProducts(JSON.parse(getLocalStorage));
    }
  }, []);

  const updateCart = (updatedCartProducts: ProductProps[]) => {
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartProducts));
  };

  const increaseQuantity = (productId: string) => {
    const updatedCart = cartProducts.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity + 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cartProducts.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        const newQuantity = product.quantity - 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    updateCart(updatedCart);
  };

  const removeProduct = (productId: string) => {
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    updateCart(updatedCart);
  };

  if (cartProducts.length === 0) {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={ product.id } data-testid="shopping-cart-product">
          <img src={ product.thumbnail } alt={ product.title } />
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <p>
            Preço: R$
            {product.price}
          </p>
          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            {product.quantity}
            <button
              data-testid="product-increase-quantity"
              onClick={ () => increaseQuantity(product.id) }
            >
              +
            </button>
            <button
              data-testid="product-decrease-quantity"
              onClick={ () => decreaseQuantity(product.id) }
            >
              -
            </button>
            <button
              data-testid="remove-product"
              onClick={ () => removeProduct(product.id) }
            >
              Remover
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
