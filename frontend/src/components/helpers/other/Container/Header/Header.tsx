import React, {
    FC,
} from 'react';

import logo from './logo.svg';

import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <img
                className={styles.logo}
                src={logo}
                alt={''}
            />
            <div className={styles.text}>
                <div className={styles.title}>
                    Николай и Альбина
                </div>
                <div className={styles.subtitle}>
                    09 / 08 / 2025
                </div>
            </div>
        </div>
    );
};

export default Header;
