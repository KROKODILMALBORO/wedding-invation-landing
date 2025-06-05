export enum CONFIG_MODE {
    DEV = 'DEV',
    TEST = 'TEST',
    PROD = 'PROD',
}
export interface IConfig {
    MODE: CONFIG_MODE;
    VERSION: string;

    URL: string;
    WS_URL: string;

    EMAIL_HOST: string;
    EMAIL_LOGIN: string;
    EMAIL_PASSWORD: string;
}

const config: IConfig = {
    MODE: String(process.env.REACT_APP_MODE) as CONFIG_MODE,
    VERSION: String(process.env.REACT_APP_VERSION),

    URL: String(process.env.REACT_APP_URL),
    WS_URL: String(process.env.REACT_APP_WS_URL),

    EMAIL_HOST: String(process.env.REACT_APP_EMAIL_HOST),
    EMAIL_LOGIN: String(process.env.REACT_APP_EMAIL_LOGIN),
    EMAIL_PASSWORD: String(process.env.REACT_APP_EMAIL_PASSWORD),
};

console.log(`Project mode: ${config.MODE}`);
console.log(`Project version: ${config.VERSION}`);

export default config;
