import { useStatusItems } from '@src/content/hooks/useStatusItems';
import { StatusItems } from '@src/components/StatusItems';
import * as React from 'react';

export function StatusItemsContainer() {
    const items = useStatusItems();

    return (
        <div>
            {items ? (
                <StatusItems items={items} />
            ) : (
                <div className={'d-flex width-full'}>
                    <img
                        className={'m-auto'}
                        src={
                            'https://github.githubassets.com/images/spinners/octocat-spinner-64.gif'
                        }
                    />
                </div>
            )}
        </div>
    );
}
