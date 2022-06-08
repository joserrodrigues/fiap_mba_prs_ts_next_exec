import { GetStaticProps } from 'next';
import React, { FC } from "react";
import NewsInfo from "../src/Models/NewsInfo";
import NewsController from '../src/Screens/News/NewsController';
import News from "../src/Services/APIs/Info/News";

type iProps = {
  news: NewsInfo[];
  statusConnection: number;
  isBBC: boolean;
};
const Flow:FC<iProps> = ({ news, statusConnection, isBBC }) => {
    return (
        <NewsController news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};
export default Flow;


export const getStaticProps: GetStaticProps = async () => {

    console.log("Inicio SSR getStaticProps");

    const info = await News.getFlowPodCast();

    let arrayNews: NewsInfo[] = [];

    if (info.status === 200) {
        arrayNews = info.data.items as NewsInfo[];
    }

    return {
        props: {
            news: arrayNews,
            statusConnection: info.status,
            isBBC: false,
        },
        revalidate: 3600, // Em segundos
    }
}