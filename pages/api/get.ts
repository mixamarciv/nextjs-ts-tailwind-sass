import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchServerApi } from '../../api';

// http://127.0.0.1:7305/api/get?methodName=match/list
// http://127.0.0.1:7305/api/get?methodName=match/list

export default async function get(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const query = req.query;
    const methodName = query.methodName as string;
    console.log('debug pages/api/get: ', methodName, query);
    const result = await fetchServerApi(methodName, query);
    res.status(200).json(result);
}
