import { ExternalLinkIcon, StatusStateIcon } from '@src/components/Icons';
import * as React from 'react';
import { StatusItem } from '@src/content/types';

export function StatusItemDetails(i: StatusItem) {
    return (
        <li className={' ActionList-item'}>
            <div className={'d-flex ActionList-content'}>
                <span className={'pl-1'}>
                    <StatusStateIcon state={i.status} />
                </span>
                {i.icon && <img src={i.icon} width={20} height={20} />}
                <strong className={'flex-1'}>{i.message}</strong>
                {i.detailsLink && (
                    <a href={i.detailsLink} target="_blank" rel="noreferrer">
                        <ExternalLinkIcon />
                    </a>
                )}
            </div>
        </li>
    );
}
