import React, {
    FC,
} from 'react';

import Form from './Form';

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <Form/>
        </div>
    );
};

export default Footer;
