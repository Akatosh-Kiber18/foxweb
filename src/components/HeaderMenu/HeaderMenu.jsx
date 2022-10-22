import React from 'react';
import styles from './HeaderMenu.module.css'
import Button from "../Button/Button";
const HeaderMenu = () => {
    const buttons = [
        {
            name: "Home",
            id: 1,
        },
        {
            name: "About",
            id: 2,
        },
        {
            name: "Courses",
            id: 3,
        },
        {
            name: "Contacts",
            id: 4,
        },
    ]

const menuButtons = buttons.map(button => <Button buttonParams={button} />)

        return (
        <div className={styles.menuContainer}>
            {menuButtons}
        </div>
    );
};

export default HeaderMenu;