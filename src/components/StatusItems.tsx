import { DisplayType, StatusItem, StatusState } from '@src/content/types';
import { getActiveStatusStates } from '@src/content/utils';
import { useState } from 'react';
import { ToolBar } from '@src/components/ToolBar';
import { StatusItemsList } from '@src/components/StatusItemsList';
import { GroupedStatusItemsList } from '@src/components/GroupedStatusItemsList';
import { HierarchicalStatusItemsList } from '@src/components/HierarchicalStatusItemsList';
import * as React from 'react';

export function StatusItems({ items }: { items: StatusItem[] }) {
  const statuses = getActiveStatusStates(items);

  const [statusFilters, setStatusFilters] = useState<
    Record<StatusState, boolean>
  >(() => {
    return statuses.reduce(
      (state: Record<StatusState, boolean>, s) => ({
        ...state,
        [s]: true,
      }),
      {} as any,
    );
  });

  const [displayType, setDisplayType] = useState<DisplayType | undefined>();

  const [filter, setFilter] = useState('');

  const handleStatusFilterClick = (s: StatusState) => {
    setStatusFilters((f) => ({
      ...f,
      [s]: !f[s],
    }));
  };

  const filteredItems = items.filter(
    (i) =>
      i.status &&
      statusFilters[i.status] &&
      (!filter || i.message?.toLowerCase()?.includes(filter)),
  );

  return (
    <div>
      <ToolBar
        statuses={statuses}
        statusFilters={statusFilters}
        displayType={displayType}
        onStatusFilterChange={handleStatusFilterClick}
        onDisplayTypeChange={setDisplayType}
        onSearchInputChange={setFilter}
      />
      <div>
        {displayType === undefined && <StatusItemsList items={filteredItems} />}
        {displayType === 'grouped' && (
          <GroupedStatusItemsList items={filteredItems} statuses={statuses} />
        )}
        {displayType === 'hierarchy' && (
          <HierarchicalStatusItemsList
            items={filteredItems}
            statuses={statuses}
          />
        )}
      </div>
    </div>
  );
}
