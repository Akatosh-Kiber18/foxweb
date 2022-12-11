import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsContainer} id={'contacts'}>
            CONTACTS
            
            <ul>
                <li>
                <a href="https://www.instagram.com/easy_english_foxx/" target="_blank"  rel="noreferrer">instagram</a>
                </li>
                <li>
                <a href="https://t.me/englishfoxx/" target="_blank"  rel="noreferrer">telegram</a>
                </li>
                <li>
                <a href="https://www.facebook.com/englishfoxx" target="_blank"  rel="noreferrer">facebook</a>
                </li>
                <li>email: test.email@google.com</li>
            </ul>
        </div>
    );
};