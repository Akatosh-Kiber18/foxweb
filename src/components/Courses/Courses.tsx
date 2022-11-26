import React from 'react';
import styles from './Courses.module.css'
import {Courses1} from './Courses1/Cours1';

export const Courses = () => {
    return (
        <div className={styles.coursesContainer} id={'courses'}>
            COURSES
            <Courses1 />
        </div>
    );
}; 