import { useEffect, useState } from 'react';
import { types } from '../../common';

interface ILinkButtonParams {
    onClick: Function;
    text: string;
    align?: types.TAlign;
}

export const LinkButton = (params: ILinkButtonParams) => {
    let classes = 'Elements_linkButton';

    if (params.align === 'right') {
        classes += ' text-right';
    }

    return (
        <div className={classes} onClick={() => params.onClick()}>
            {params.text}
        </div>
    );
};
