import { StatusItemDetails } from '@src/components/StatusItem';
import * as React from 'react';
import { StatusItem } from '@src/content/types';

type Props = {
    items: StatusItem[];
};

export function StatusItemsList(props: Props) {
    const { items } = props;

    return (
        <ul className={'ActionList'}>
            {items.map((i) => (
                <StatusItemDetails key={i.message} {...i} />
            ))}
        </ul>
    );
}
