import React from 'react';
import burgerImg from '../images/menu-images/burger-menu2.png'
import pizzaImg from '../images/menu-images/pizza-menu1.png'
import kebabImg from '../images/menu-images/kebab-menu1.png'
import {FaHamburger} from 'react-icons/fa'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiMeal} from 'react-icons/gi'


export const MenuList = [
    {
        id: 1,
        name: 'Mėsainiai',
        img: burgerImg,
        icon: <FaHamburger />
    },
    {
        id: 2,
        name: 'Picos',
        img: pizzaImg,
        icon: <FaPizzaSlice />
    },
    {
        id: 3,
        name: 'Lavašai',
        img: kebabImg,
        icon: <GiMeal />
    },
    {
        id: 4,
        name: 'Blynai',
        img: kebabImg,
        icon: <GiMeal />
    }
]
