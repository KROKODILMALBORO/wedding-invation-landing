import React, {
    FC,
} from 'react';

import blueImage from './media/blue.png';
import brownImage from './media/brown.png';
import creamImage from './media/cream.png';
import darkBlueImage from './media/dark-blue.png';
import greenImage from './media/green.png';
import lightBlueImage from './media/light-blue.png';
import lightBrownImage from './media/light-brown.png';
import lightGreenImage from './media/light-green.png';
import lightVioletImage from './media/light-violet.png';
import paleGreenImage from './media/pale-green.png';
import pinkImage from './media/pink.png';
import violetImage from './media/violet.png';

import styles from './Colors.module.scss';

const Colors: FC = () => {
    return (
        <div className={styles.colors}>
            <img
                src={lightBlueImage}
                alt={''}
            />
            <img
                src={blueImage}
                alt={''}
            />
            <img
                src={darkBlueImage}
                alt={''}
            />
            <img
                src={lightVioletImage}
                alt={''}
            />
            <img
                src={violetImage}
                alt={''}
            />
            <img
                src={lightBrownImage}
                alt={''}
            />
            <img
                src={brownImage}
                alt={''}
            />
            <img
                src={lightGreenImage}
                alt={''}
            />
            <img
                src={greenImage}
                alt={''}
            />
            <img
                src={paleGreenImage}
                alt={''}
            />
            <img
                src={creamImage}
                alt={''}
            />
            <img
                src={pinkImage}
                alt={''}
            />
        </div>
    );
};

export default Colors;
