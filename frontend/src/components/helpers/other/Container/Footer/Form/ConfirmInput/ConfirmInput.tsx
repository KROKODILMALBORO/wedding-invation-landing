import {
    IProps,
    IRef,
} from './types';

import React, {
    forwardRef,
    useImperativeHandle,
    useState,
} from 'react';

import {
    MultilineInput,
} from 'components/helpers/Inputs';

import {
    ERROR,
} from './constants';
import {
    formatError,
    formatValue,
} from './functions';

const ConfirmInput = forwardRef<IRef, IProps>((props, ref) => {
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState<ERROR | null>(null);

    const onChangeValue = (value: string) => {
        setValue(value);
        setError(null);
    };

    useImperativeHandle(ref, () => {
        return {
            getValue(): string {
                return formatValue(value);
            },
            clearValue(): void {
                return setValue('');
            },
            validate(): boolean {
                if (!formatValue(value)) {
                    setError(ERROR.IS_REQUIRED);

                    return false;
                }

                setError(null);

                return true;
            },
        };
    });

    return (
        <MultilineInput
            value={value}
            className={props.className}
            placeholder={props.placeholder}
            isDisabled={props.isDisabled}
            isError={!!error}
            errorMessage={formatError(error)}
            onChangeValue={onChangeValue}
        />
    );
});

export default ConfirmInput;
