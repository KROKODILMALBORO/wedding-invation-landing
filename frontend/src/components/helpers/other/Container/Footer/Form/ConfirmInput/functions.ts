import {
    ERROR,
} from './constants';

export function formatValue(value: string): string {
    return value.trim();
}

export function formatError(error: ERROR | null): string {
    switch (error) {
        case ERROR.IS_REQUIRED: {
            return 'Обязательное поле';
        }
        case null: {
            return '';
        }
    }
}
