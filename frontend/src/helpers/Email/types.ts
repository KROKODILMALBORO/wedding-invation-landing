type IResponseError = any;

interface IWithResponseError {
    error?: IResponseError;
}

export interface ISend extends IWithResponseError {
    error?: any;
}
