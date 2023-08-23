import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductProps } from '../helpers/props';
import CategoriesProducts from '../components/CategoriesProducts';

function Search({ quantity }: ProductProps) {
  const [searchProducts, setSearchProducts] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchProducts(event.target.value);
  }

  function addToCart(product: ProductProps) {
    const productOne: ProductProps = {
      ...product,
      quantity: 1,
    };

    setCartItems([...cartItems, productOne]);
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, productOne]));
  }

  async function handleSearch() {
    const results = await getProductsFromCategoryAndQuery(searchProducts, searchProducts);

    if (results.results.length > 0) {
      setSearchResults(results.results);
      setNoResults(false);
    } else {
      setSearchResults([]);
      setNoResults(true);
    }
  }

  return (
    <header>
      <input
        type="text"
        data-testid="query-input"
        value={ searchProducts }
        onChange={ handleInput }
      />
      <button data-testid="query-button" onClick={ handleSearch }>
        Buscar
      </button>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <CategoriesProducts
        setSearchResults={ setSearchResults }
      />

      <Link
        to="/ShoppingCart"
        data-testid="shopping-cart-button"
      >
        Carrinho de Compras
        <span data-testid="shopping-cart-size">
          (
          { quantity }
          )
        </span>
      </Link>

      {noResults && <p>Nenhum produto foi encontrado</p>}

      {searchResults.map((product) => (
        <li data-testid="product" key={ product.id }>
          <Link to={ `/productDetails/${product.id}` }>
            <img data-testid="product-detail-link" src={ product.thumbnail } alt="" />
            <h3>{ product.title }</h3>
            <p>{ `RS$${product.price}` }</p>
          </Link>
          <button onClick={ () => addToCart(product) } data-testid="product-add-to-cart">
            Adicionar ao carrinho
          </button>
        </li>
      )) }
    </header>
  );
}

export default Search;
