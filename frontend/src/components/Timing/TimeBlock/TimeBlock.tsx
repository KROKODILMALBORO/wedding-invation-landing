import {
    IProps,
} from './types';

import React, {
    FC,
} from 'react';

import {
    getDescription,
    getTime,
    getTitle,
} from './functions';

import styles from './TimeBlock.module.scss';

const TimeBlock: FC<IProps> = (props) => {
    return (
        <div className={styles.timeBlock}>
            <div className={styles.time}>
                {getTime(props.type)}
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    {getTitle(props.type)}
                </div>
                <div className={styles.description}>
                    {
                        getDescription(props.type)
                            .map((sentence, i) =>
                                <div key={i}>
                                    {sentence}
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default TimeBlock;
