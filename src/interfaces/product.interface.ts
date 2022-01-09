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

export interface IProduct {
  id?: number;
  name: string;
  category: string;
  size: string;
  color: string;
  price: number;
  image: any;
}
