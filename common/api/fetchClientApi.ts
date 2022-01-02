import axios from 'axios';

function getServertUrl(): string {
    const CLIENT_APP_PORT = Number(process.env.CLIENT_APP_PORT);
    return `http://127.0.0.1:${CLIENT_APP_PORT}/`;
}

function getClientUrl(): string {
    const url = new URL(window.location.href);
    const port = url.port ? `:${url.port}` : '';
    return `${url.protocol}//${url.hostname}${port}/`;
}

const isServer = typeof window === 'undefined';
const CLIENT_APP_URL = isServer ? getServertUrl() : getClientUrl();
console.log('CLIENT_API_URL: ', CLIENT_APP_URL);

export async function fetchClientApi(
    urlPath: string,
    params: any
): Promise<any> {
    const url = `${CLIENT_APP_URL}${urlPath}`;

    const options = {
        method: 'GET',
        url,
        params,
    };

    console.log('fetchClientApi: ', options);
    const resp = await axios(options as any);
    const data = resp.data as any;

    if (data && data.data.debug) {
        const debugInfo = {
            urlPath,
            params,
            debug: data.data.debug,
        };
        console.log('fetchClientApi debug: ', debugInfo);
    }

    return resp.data;
}
