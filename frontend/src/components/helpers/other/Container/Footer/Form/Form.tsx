import React, {
    FC,
    useState,
} from 'react';

import Email from 'helpers/Email';

import {
    PrimaryButton,
} from 'components/helpers/buttons';

import ConfirmInput, {
    useConfirmInputRef,
} from './ConfirmInput';

import styles from './Form.module.scss';

const Form: FC = () => {
    const [isPending, setIsPending] = useState(false);

    const confirmInputRef = useConfirmInputRef();

    const onSubmit = async () => {
        if (isPending) {
            return;
        }
        if (!confirmInputRef.current.validate()) {
            return;
        }

        const body = confirmInputRef.current.getValue();

        setIsPending(true);

        const res = await Email.send(body);

        setIsPending(false);

        if (res.error) {
            return;
        }

        alert('Подтверждение отправлено');
        confirmInputRef.current.clearValue();
    };

    return (
        <div className={styles.form}>
            <ConfirmInput
                ref={confirmInputRef}
                className={styles.input}
                value={''}
                placeholder={'Укажите имя и фамилию, а также тех с кем будете'}
                isDisabled={isPending}
            />
            <PrimaryButton
                className={styles.button}
                isDisabled={isPending}
                onClick={onSubmit}
            >
                Подтвердить
            </PrimaryButton>
        </div>
    );
};

export default Form;
