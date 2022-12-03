import React from 'react';
import { useState } from 'react';
import styles from './Cours1.module.css';
import {Collapse} from 'react-collapse';

export const Courses1 = () => {
        const [cours1Visible, setCours1Visible] = useState<boolean>(false);
        return (
            <div className={styles.coursContainer}>
            <button className={styles.coursBtn} onClick={() => setCours1Visible(!cours1Visible)}>COURSNAME</button>
            <Collapse isOpened={cours1Visible}>
            <div>
                SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className={styles.btnsContainer}>
            <button>Registration</button>
            <button>Prices</button>
            </div>
            </Collapse>
            <div className={styles.line}></div>
            </div>
    );
};