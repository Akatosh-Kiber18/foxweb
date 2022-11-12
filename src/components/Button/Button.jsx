import React from 'react';
import styles from './Button.module.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const params = props.buttonParams
    return (
            <Link 
                to={params.linkTo} 
                className={styles.menuButton} 
                key={params.id}
            >
                {params.name}
            </Link>
    );
};

export default Button;