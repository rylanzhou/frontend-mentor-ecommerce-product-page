export { default as Avatar } from './image-avatar.png';

import Product1 from './image-product-1.jpg';
import Product2 from './image-product-2.jpg';
import Product3 from './image-product-3.jpg';
import Product4 from './image-product-4.jpg';

export const productImages = [Product1, Product2, Product3, Product4];

import Product1Thumb from './image-product-1-thumbnail.jpg';
import Product2Thumb from './image-product-2-thumbnail.jpg';
import Product3Thumb from './image-product-3-thumbnail.jpg';
import Product4Thumb from './image-product-4-thumbnail.jpg';

export const productImageWithThumbnails = [
  { origin: Product1, thumb: Product1Thumb },
  { origin: Product2, thumb: Product2Thumb },
  { origin: Product3, thumb: Product3Thumb },
  { origin: Product4, thumb: Product4Thumb },
];
