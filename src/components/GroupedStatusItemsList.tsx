import { StatusItem, StatusState } from '@src/content/types';
import { StatusItemDetails } from '@src/components/StatusItem';
import * as React from 'react';
import { StatusItemsList } from '@src/components/StatusItemsList';

type Props = {
    items: StatusItem[];
    statuses: StatusState[];
};

export function GroupedStatusItemsList(props: Props) {
    const { items, statuses } = props;

    const groupedItems = items.reduce(
        (acc: Record<StatusState, StatusItem[]>, item) => {
            return {
                ...acc,
                ...(item.status
                    ? { [item.status]: [...(acc[item.status] ?? []), item] }
                    : {}),
            };
        },
        {} as any,
    );

    return (
        <>
            {statuses.map((status) => {
                return (
                    groupedItems[status] && (
                        <StatusItemsList
                            key={status}
                            items={groupedItems[status]}
                        />
                    )
                );
            })}
        </>
    );
}
