import {
    ISend,
} from './types';

import config from 'config';

import Sender from './Sender';

class Email {
    public static async send(body: string): Promise<ISend> {
        const res = await Sender.send({
            Host: config.EMAIL_HOST,
            Username: config.EMAIL_LOGIN,
            Password: config.EMAIL_PASSWORD,
            To: config.EMAIL_LOGIN,
            From: config.EMAIL_LOGIN,
            Subject: 'Новое подтверждение',
            Body: body,
        });

        if (res !== 'OK') {
            console.log(res);

            return {
                error: res,
            };
        }

        return {};
    }
}

export default Email;
