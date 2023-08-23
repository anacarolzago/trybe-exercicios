export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId :string, query :string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategory(categoryId :string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const data = await response.json();
  return data.results;
}

export async function getProductById(productId: string | undefined) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await result.json();

  return data;
}
