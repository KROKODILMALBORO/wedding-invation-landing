import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import Footer from './Footer';
import Header from './Header';

import styles from './Container.module.scss';

const Container: FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Container;
