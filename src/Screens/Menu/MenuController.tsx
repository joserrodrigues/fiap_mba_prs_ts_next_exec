import React, { FC } from 'react';
import MenuInfo from '../../Models/MenuInfo';
import MenuView from './MenuView';

type iProps = {
    menus: MenuInfo[]
}

const MenuController:FC<iProps> = ({ menus }) => {
    return (
        <MenuView menus={menus}/>
    );
};

export default MenuController;