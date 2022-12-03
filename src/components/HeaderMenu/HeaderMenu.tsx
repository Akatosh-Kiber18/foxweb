import React from 'react';
import styles from './HeaderMenu.module.css'
import {Button} from "../Button/Button";
import { menuBtn } from '../../interfaces/interfaces';
 
export const HeaderMenu = () => {
    const buttons = [
        {
            name: "Home",
            id: 1,
            linkTo: "home"
        },
        {
            name: "About",
            id: 2,
            linkTo: "about"
        },
        {
            name: "Courses",
            id: 3,
            linkTo: "courses"
        },
        {
            name: "Contacts",
            id: 4,
            linkTo: "contacts"
        },
    ]

const menuButtons = buttons.map((button: menuBtn) => <Button name={button.name} id={button.id} linkTo={button.linkTo} key={button.id}/>)

        return (
            <div className={styles.menuContainer}>
                {menuButtons}
            </div>
            );
};