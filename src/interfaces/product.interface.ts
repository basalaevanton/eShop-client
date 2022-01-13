export const Category: string[] = [
  '',
  'Accessories',
  'Denim',
  'Dresses',
  'Jackets',
  'Jeans',
  'Pants',
  'Shoes',
  'Shorts',
  'Skirts',
  'Sweaters',
  'Tops',
];
export const Size: string[] = ['', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
export const Color: string[] = [
  '',
  'Red',
  'White',
  'Yellow',
  'Purple',
  'Brown',
  'Green',
  'Orange',
  'Black',
  'Blue',
];

export interface Category {
  id: number;
  name: string;
  productId: number;
}

export interface ProductSize {
  id: number;
  sizeId: number;
  productId: number;
}

export interface Size {
  id: number;
  name: string;
  ProductSize: ProductSize;
}

export interface ProductColor {
  id: number;
  colorId: number;
  productId: number;
}

export interface Color {
  id: number;
  name: string;
  ProductColor: ProductColor;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
  size: Size[];
  color: Color[];
}
