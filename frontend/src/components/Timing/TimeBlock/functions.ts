import {
    TYPE,
} from './constants';

export function getTime(type: TYPE): string {
    switch (type) {
        case TYPE.CEREMONY: {
            return '11:00';
        }
        case TYPE.BANQUET: {
            return '16:30';
        }
    }
}
export function getTitle(type: TYPE): string {
    switch (type) {
        case TYPE.CEREMONY: {
            return 'Свадебная церемония';
        }
        case TYPE.BANQUET: {
            return 'Банкет';
        }
    }
}
export function getDescription(type: TYPE): string[] {
    switch (type) {
        case TYPE.CEREMONY: {
            return [
                'Офицальное приобретение статуса супругов.',
                'Дом семейных торжеств ул. Проспект Мира 24г.',
            ];
        }
        case TYPE.BANQUET: {
            return [
                'Время вкусной еды, напитков и танцулек.',
                'Дрокино парк.',
            ];
        }
    }
}
