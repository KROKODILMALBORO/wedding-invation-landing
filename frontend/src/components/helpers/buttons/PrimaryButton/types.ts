import {
    MouseEventHandler,
} from 'react';

export interface IProps {
    children: string;

    className?: string;
    isDisabled?: boolean;

    onClick: MouseEventHandler<HTMLButtonElement>;
}
