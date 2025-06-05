import {
    TYPE,
} from './constants';

export function getTitle(type: TYPE): string {
    switch (type) {
        case TYPE.APPEAL: {
            return 'Дорогой гость!';
        }
        case TYPE.DRESS: {
            return 'Дресс-код';
        }
        case TYPE.WISH: {
            return 'Пожелание';
        }
    }
}

export function getDescription(type: TYPE): string {
    switch (type) {
        case TYPE.APPEAL: {
            return 'Мы рады сообщить Вам, что скоро состоится самое главное торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами радость этого незабываемого дня.';
        }
        case TYPE.DRESS: {
            return 'Мы ждём и готовимся к нашему незабываемому дню! Поддержите нас красивыми нарядами в палитре мероприятия.';
        }
        case TYPE.WISH: {
            return 'Лучшая поддержка для нас - ваши искренние пожелния и лучезарные улыбки, остальное можно поместить в конверт.';
        }
    }
}
