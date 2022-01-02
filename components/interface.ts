export interface IMatchDataParams {
    loadedData?: any;
    loadOptions?: IFetchDataOptions;
}

export interface IFetchDataOptions {
    methodName: string;
    [args: string]: any;
}
