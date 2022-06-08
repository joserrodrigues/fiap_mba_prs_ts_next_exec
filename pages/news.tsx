import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import NewsInfo from '../src/Models/NewsInfo';
import NewsController from '../src/Screens/News/NewsController';
import News from '../src/Services/APIs/Info/News'

type iProps = {
  news: NewsInfo[];
  statusConnection: number;
  isBBC: boolean;
};
const NewsPage:FC<iProps> = ({ news, statusConnection, isBBC}) => {
    return (
        <NewsController news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};
export default NewsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {

    console.log("Inicio SSR getServerSideProps");

    const info = await News.getNews();
    
    let arrayNews:NewsInfo[] = [];

    if(info.status === 200){
        arrayNews = info.data.items as NewsInfo[];
    }


    return {
        props: {
            news: arrayNews,
            statusConnection: info.status,
            isBBC: true,
        },
    }
}
