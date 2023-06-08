import React, { useState } from 'react';

import Product from './Product';
import { ProductType } from '../types';
import '../styles/RegisterProduct.css';

type Props = {
  handleSubmit: (formData: ProductType) => void
};

const INITIAL_STATE = {
  name: '',
  description: '',
  price: 0,
  image: '',
  tags: '',

};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;
  const [formData, setFormData] = useState(INITIAL_STATE);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type, id, value, valueAsNumber } = event.target;

    if (type === 'number') {
      setFormData({
        ...formData,
        [id]: valueAsNumber,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>

          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              onChange={ handleChange }
              value={ formData.name }
              required
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              onChange={ handleChange }
              value={ formData.description }
              required
            />
          </label>

          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              onChange={ handleChange }
              value={ formData.price }
              required
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              value={ formData.image }
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              value={ formData.tags }
              onChange={ handleChange }
            />
          </label>

          <button type="submit">Salvar</button>

        </form>

        <Product productInfo={ formData } />
      </div>
    </main>
  );
}
