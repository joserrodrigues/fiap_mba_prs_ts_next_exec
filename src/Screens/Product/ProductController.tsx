import React, { FC } from 'react';
import ProductInfo from '../../Models/ProductInfo';
import ProductView from './ProductView';

type iProps = {
  product: ProductInfo;
  statusConnection: number;
};
const ProductController:FC<iProps> = ({ product, statusConnection}) => {
    return (
        <ProductView product={product} statusConnection={statusConnection} />
    );
};

export default ProductController;