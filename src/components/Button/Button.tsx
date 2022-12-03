import React from 'react';
import {Link} from "react-scroll";
import {menuBtn} from '../../interfaces/interfaces';
import styles from "./Button.module.css"

export const Button = ({name, id, linkTo}:menuBtn) => {
    return (
        <Link className={styles.menuButton} to={linkTo} spy={true} smooth={true} offset={-84} duration={700} key={id}> {name} </Link>
    );
};

// key={params.id}
// to={params.linkTo} 
// spy={true}
// smooth={true} 
// offset={50} 
// duration={500}