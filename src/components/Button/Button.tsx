import React from 'react';
import {Link} from "react-scroll";
import styles from "./Button.module.css"

export const Button = (props: any) => {
    const params = props.buttonParams
    return (
        <Link className={styles.menuButton} to={params.linkTo} spy={true} smooth={true} offset={-84} duration={700}>{params.name}</Link>
    );
};

// key={params.id}
// to={params.linkTo} 
// spy={true}
// smooth={true} 
// offset={50} 
// duration={500}