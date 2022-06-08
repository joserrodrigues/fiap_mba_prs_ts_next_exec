import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import ProductInfo from '../../src/Models/ProductInfo';
import ProductController from '../../src/Screens/Product/ProductController';
import News from '../../src/Services/APIs/Info/News';

type iProps = {
  product: ProductInfo;
  statusConnection: number;
};
const Product:FC<iProps> = ({ product, statusConnection }) => {
    return (
        <ProductController product={product} statusConnection={statusConnection}/>
    );
};
export default Product;


export const getStaticProps: GetStaticProps = async (context) => {


    console.log("Inicio SSR getStaticProps");

    const info = await News.getProduct(context.params!.id + "");
    let infoProduct = {};

    if (info.status === 200) {
        infoProduct = info.data.info;
    }

    return {
        props: {
            product: infoProduct,
            statusConnection: info.status
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true, // false | blocking
    // false - coloca erro 400 se variável for diferente do array acima
    // true -  se a variável for diferente do array acima, carrega a página sem informação e depois carrega novamente
    // 'blocking' - espera o carregamento da informação para mostrar a página
  };
};