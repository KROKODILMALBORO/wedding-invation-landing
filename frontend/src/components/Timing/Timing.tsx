import React, {
    FC,
} from 'react';

import TimeBlock, {
    TYPE as TIME_BLOCK_TYPE,
} from './TimeBlock';

import calendarImage from './media/calendar.svg';

import styles from './Timing.module.scss';

const Timing: FC = () => {
    return (
        <div className={styles.timing}>
            <div className={styles.timeBlocks}>
                <TimeBlock type={TIME_BLOCK_TYPE.CEREMONY}/>
                <TimeBlock type={TIME_BLOCK_TYPE.BANQUET}/>
            </div>
            <img
                className={styles.calendar}
                src={calendarImage}
                alt={''}
            />
            {/* <Calendar/> */}
        </div>
    );
};

export default Timing;
