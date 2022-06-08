import * as React from 'react';
import { Grid, CardActions, CardContent, CardMedia, Button, Typography, Container, Stack } from '@mui/material';
import CardNews from '../../Components/CardNews/CardNews'
import styles from './News.module.css'
import NewsInfo from '../../Models/NewsInfo';

type iProps = {
  news: NewsInfo[];
  statusConnection: number;
  isBBC: boolean;
};

const NewsView:React.FC<iProps> = ({ news, isBBC }) => {

    console.log(news);
    let arrayInfo:JSX.Element[] = [];

    if (news){
        news.forEach((element:NewsInfo) => {
            arrayInfo.push(
                <CardNews key={element.link._text} info={element} isBBC={isBBC} />
            );
        });
    }

    console.log(arrayInfo)
    return (
        <Grid
            className={styles.gridClass}
            spacing={5}
            container
            direction="row">
            {arrayInfo}
        </Grid>
    );
}

export default NewsView;