import { useEffect, useState } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { ProductProps } from '../helpers/props';

type CategoriesType = {
  id: string,
  name: string,
};

type PropsCategorie = {
  setSearchResults: (a: ProductProps[]) => void,
};

function CategoriesProducts({ setSearchResults }:PropsCategorie) {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const allCategories = async () => {
      const data = await await getCategories();
      setCategories(data);
    };
    allCategories();
  }, []);

  const handleClick = async (value: string) => {
    const result = await getProductsFromCategory(value);
    setSearchResults(result);
  };

  return (
    <section>
      <h2>Categorias:</h2>
      <ul>
        {categories.map((category) => (
          <li key={ category.id }>
            <label data-testId="category" htmlFor={ category.id }>
              <input
                type="radio"
                name="category"
                value={ category.id }
                id={ category.id }
                onChange={ (e) => handleClick(e.target.value) }
              />
              { category.name }
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoriesProducts;
