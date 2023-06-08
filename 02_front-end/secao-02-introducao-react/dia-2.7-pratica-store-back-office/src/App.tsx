import { useState } from 'react';

import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

import './styles/App.css';

function App() {
  const [registerProductEstaVisivel, setRegisterProductEstaVisivel] = useState(true);
  const [products, setProducts] = useState<Array<ProductWithId>>([]);
  // const [products, setProducts] = useState<ProductType[]>([]);

  function handleBotaoCadastrar() {
    setRegisterProductEstaVisivel(true);
  }

  function handleBotaoVerProdutos() {
    setRegisterProductEstaVisivel(false);
  }

  const handleCreateProduct = (formData: ProductType) => {
    // const productWihId = Object.assign({}, formData, { id: Date.now() })
    const productWithId = { ...formData, id: Date.now() };

    setProducts([
      ...products,
      productWithId,

    ]);
  };

  const handleDeleteProduct = (id: string | number) => {
    const filterProducts = products.filter((product) => product.id !== id);

    setProducts(filterProducts);
  };

  return (
    <div className="app">
      <header>
        <button onClick={ handleBotaoCadastrar }>Cadastrar</button>
        <button onClick={ handleBotaoVerProdutos }>Ver produtos</button>
      </header>

      {
        registerProductEstaVisivel
          ? (
            <RegisterProduct
              handleSubmit={ handleCreateProduct }
            />
          ) // para este componente ser exibido, o estado do registerProductEstaVisivel tem que estar true
          : <ListProducts
              products={ products }
              handleDelete={ handleDeleteProduct }
          />
      }

    </div>
  );
}

export default App;
