import {
    RefObject,
    useRef,
} from 'react';

export default function<IRef>(defaultValue: IRef): RefObject<IRef> {
    const ref = useRef(defaultValue);

    if (!ref.current) {
        ref.current = defaultValue;
    }

    return ref;
}
