import {
    IRef,
} from './types';

import {
    useDefaultedRef,
} from 'tools/hooks';

export function useConfirmInputRef() {
    return useDefaultedRef<IRef>({
        getValue(): string {
            return '';
        },
        clearValue(): void {
            return;
        },
        validate(): boolean {
            return true;
        },
    });
}
