import React, {FC, useEffect} from 'react';
import NewsView from './NewsView';
import NewsInfo from '../../Models/NewsInfo'

type iProps = {
  news: NewsInfo[];
  statusConnection: number;
  isBBC: boolean;
};
const NewsController:FC<iProps> = ({ news, statusConnection, isBBC}) => {

    return (
        <NewsView news={news} statusConnection={statusConnection} isBBC={isBBC} />
    );
};

export default NewsController;