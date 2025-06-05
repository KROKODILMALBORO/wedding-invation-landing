import {
    IProps,
} from './types';

import classNames from 'classnames';
import React, {
    ChangeEvent,
    FC,
} from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './MultilineInput.module.scss';

const MultilineInput: FC<IProps> = (props) => {
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeValue(e.target.value);
    };

    return (
        <div
            className={
                classNames(styles.multilineInput, props.className, {
                    [styles.isDisabled]: props.isDisabled,
                    [styles.isError]: props.isError,
                })
            }
        >
            {
                !!props.errorMessage &&
                <div className={styles.errorMessage}>
                    {props.errorMessage}
                </div>
            }
            <TextareaAutosize
                className={styles.input}
                value={props.value}
                placeholder={props.placeholder}
                disabled={props.isDisabled}
                onChange={onChange}
            />
        </div>
    );
};

export default MultilineInput;
