import React, { FC } from 'react';
import { Typography, Stack, Container, CircularProgress} from '@mui/material';
import styles from './Product.module.css';
import ProductInfo from '../../Models/ProductInfo';

type iProps = {
  product: ProductInfo;
  statusConnection: number;
};
const ProductView:FC<iProps> = ({ product, statusConnection }) => {

    let mountInfo = null;
    if(statusConnection === 200){
        mountInfo = (
            <>
                <Typography gutterBottom variant="h3" component="div" className={styles.titleText} >
                    Produto {product.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" className={styles.nameText}>
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    <img src={product.image} height={150} />
                </Typography>                
                <Typography gutterBottom variant="body2" component="div">
                    {product.description}
                </Typography>                
                <Typography gutterBottom variant="body2" component="div">
                    Voltagem: {product.voltage}
                </Typography>
            </>
        )
    } else {
        mountInfo = (
            <CircularProgress />
        );
    }
    return (
        <Container maxWidth="xl">
            <Stack direction='column' 
                spacing={6}
                justifyContent="center"
                alignItems="center"
                className={styles.StackClass}
                >
                {mountInfo}
            </Stack>
        </Container>
    );
};

export default ProductView;