import { Typography, Stack, Container } from '@mui/material';
import React, {FC} from 'react';
import styles from './Menu.module.css';
import MenuInfo from "../../Models/MenuInfo";
import Link from 'next/link'

type iProps = {
  menus: MenuInfo[];
};

const MenuView:FC<iProps> = ({ menus }) => {

    let arrayInfo:JSX.Element[] = [];
    console.log(menus);
    if (menus) {
        menus.forEach((element:MenuInfo) => {
            arrayInfo.push(
                <Link href={element.link}>
                    <a className={styles.LinkText}>{element.title}</a>
                </Link>
            );
        });
    }
    return (
        <Container maxWidth="xl">
            <Stack direction={{ xs: 'column' }}
                spacing={6}
                justifyContent="center"
                alignItems="center"
                >
                <Typography gutterBottom variant="h3" component="div" className={styles.MenuText}>
                    Menu do site
                </Typography>
                {arrayInfo}
            </Stack>
        </Container>
    );
};

export default MenuView;