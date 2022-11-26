import React from 'react';
import styles from './HeaderMenu.module.css'
import {Button} from "../Button/Button";
 
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

const menuButtons = buttons.map(button => <Button buttonParams={button} />)

        return (
            <div className={styles.menuContainer}>
                {menuButtons}
            </div>
            );
};