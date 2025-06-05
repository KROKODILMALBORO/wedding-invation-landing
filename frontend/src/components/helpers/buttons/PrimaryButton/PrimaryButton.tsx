import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    FC,
    MouseEventHandler,
} from 'react';

import styles from './PrimaryButton.module.scss';

const PrimaryButton: FC<IProps> = (props) => {
    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        props.onClick(e);
    };

    return (
        <button
            className={classNames(styles.primaryButton, props.className, {
                [styles.isDisabled]: props.isDisabled,
            })}
            disabled={props.isDisabled}
            onClick={onClick}
        >
            <div className={styles.text}>
                {props.children}
            </div>
        </button>
    );
};

export default PrimaryButton;
