export interface IProps {
    value: string;

    className?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isError?: boolean;
    errorMessage?: string;

    onChangeValue(value: string): void;
}
