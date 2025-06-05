import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import Colors from './Colors';

import {
    TYPE,
} from './constants';
import {
    getDescription,
    getTitle,
} from './functions';

import styles from './Card.module.scss';

const Card: FC<IProps> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {getTitle(props.type)}
            </div>
            <div className={styles.description}>
                {getDescription(props.type)}
            </div>
            {
                props.type === TYPE.DRESS &&
                <Colors/>
            }
        </div>
    );
};

export default Card;
