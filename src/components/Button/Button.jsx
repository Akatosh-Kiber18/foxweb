import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    const params = props.buttonParams
    return (
        <button className={styles.menuButton} key={params.id} >
            {params.name}
        </button>
    );
};

export default Button;