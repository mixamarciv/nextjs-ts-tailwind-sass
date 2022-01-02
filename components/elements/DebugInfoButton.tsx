import { useEffect, useState } from 'react';

const randomId = () =>
    Number(Math.random() * Number.MAX_SAFE_INTEGER).toString(32);

interface IDebugInfoButtonParams {
    show?: boolean;
    debugData: any;
}

export const DebugInfoButton = (params: IDebugInfoButtonParams) => {
    const [isHidden, setHidden] = useState(!params.show);

    const debugSql = isHidden ? [] : getSqlBlocks(params.debugData);

    return (
        <div className="inline-block">
            <div
                className="DebugInfoButton_btn"
                onClick={() => setHidden(!isHidden)}
            >
                i
            </div>

            {isHidden ? null : (
                <div className="DebugInfoButton_data">
                    {debugSql.map((sql) => {
                        return <pre key={randomId()}>${sql}</pre>;
                    })}
                    {JSON.stringify(params.debugData, null, '  ')}
                </div>
            )}
        </div>
    );
};

function getSqlBlocks(obj: any, sqlBlocks: string[] = []): string[] {
    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            if (key === 'sql' && typeof obj.sql === 'string') {
                sqlBlocks.push(obj.sql);
            } else {
                getSqlBlocks(obj[key], sqlBlocks);
            }
        }
    }
    return sqlBlocks;
}
