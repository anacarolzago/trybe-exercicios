export interface ProductProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number,
}

export interface ShoppingCartProps {
  cartItems:ProductProps[];
}

export interface Product {
  title: string;
  price: number;
  thumbnail: string;
}
