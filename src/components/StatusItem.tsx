import { ExternalLinkIcon, StatusStateIcon } from '@src/components/Icons';
import * as React from 'react';
import { StatusItem } from '@src/content/types';

export function StatusItemDetails(i: StatusItem) {
    return (
        <li className={'d-flex ActionList-item'}>
            <span className={'ActionList-content'}>
                <span className={'pl-1'}>
                    <StatusStateIcon state={i.status} />
                </span>
                <img src={i.icon} width={20} height={20} />
                <strong className={'flex-1'}>{i.message}</strong>
                <a href={i.detailsLink} target="_blank" rel="noreferrer">
                    <ExternalLinkIcon />
                </a>
            </span>
        </li>
    );
}
