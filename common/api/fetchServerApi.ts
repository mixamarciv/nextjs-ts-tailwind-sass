import axios from 'axios';

const CLIENT_API_PORT = Number(process.env.CLIENT_API_PORT);
const CLIENT_API_URL = `http://127.0.0.1:${CLIENT_API_PORT}/`;
console.log('SERVER_API_URL: ', CLIENT_API_URL);

export async function fetchServerApi(
    method: string,
    params: any
): Promise<any> {
    const url = `${CLIENT_API_URL}${method}`;

    const options = {
        method: 'GET',
        url,
        params,
    };

    const resp = await axios(options as any);

    return resp.data;
}
