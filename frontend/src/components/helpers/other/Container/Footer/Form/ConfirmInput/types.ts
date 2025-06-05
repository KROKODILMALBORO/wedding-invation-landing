export interface IProps {
    value: string;

    className?: string;
    placeholder?: string;
    isDisabled?: boolean;
}

export interface IRef {
    getValue(): string;
    clearValue(): void;

    validate(): boolean;
}
