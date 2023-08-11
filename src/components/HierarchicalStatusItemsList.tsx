import { StatusItem, StatusState } from '@src/content/types';
import { StatusItemDetails } from '@src/components/StatusItem';
import * as React from 'react';
import { StatusItemsList } from '@src/components/StatusItemsList';
import { compareStrings } from '@src/content/utils';

type Props = {
    items: StatusItem[];
    statuses: StatusState[];
};

export function HierarchicalStatusItemsList(props: Props) {
    const { items, statuses } = props;

    const groupedItems = items.reduce(
        (acc: Record<string, StatusItem[]>, item) => {
            const key = item.path ?? '';
            return {
                ...acc,
                ...{ [key]: [...(acc[key] ?? []), item] },
            };
        },
        {} as any,
    );

    const pathes = Object.keys(groupedItems);
    pathes.sort((a, b) => {
        if (a === '' || b === '') {
            return 1;
        } else return compareStrings(a, b);
    });

    return (
        <>
            {pathes.map((path) => {
                return (
                    groupedItems[path] && (
                        <div key={path}>
                            {path && <h4 className={'mx-3 my-2'}>{path}</h4>}
                            <StatusItemsList
                                key={path}
                                items={groupedItems[path]}
                            />
                        </div>
                    )
                );
            })}
        </>
    );
}
