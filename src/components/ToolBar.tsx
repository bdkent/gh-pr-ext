import {
    GroupIcon,
    HierarchyIcon,
    StatusStateIcon,
} from '@src/components/Icons';
import { SearchInput } from '@src/components/SearchInput';
import * as React from 'react';
import { DisplayType, StatusState } from '@src/content/types';

type Props = {
    statuses: StatusState[];
    statusFilters: Record<StatusState, boolean>;
    onStatusFilterChange: (status: StatusState) => void;
    displayType?: DisplayType;
    onDisplayTypeChange: (
        arg: (displayType?: DisplayType) => DisplayType | undefined,
    ) => void;
    onSearchInputChange: (value: string) => void;
};

const displayTypes: DisplayType[] = ['hierarchy', 'grouped'];

const displayTypesToComponent = {
    hierarchy: HierarchyIcon,
    grouped: GroupIcon,
};

export function ToolBar(props: Props) {
    const {
        statuses,
        statusFilters,
        onStatusFilterChange,
        displayType,
        onDisplayTypeChange,
        onSearchInputChange,
    } = props;

    return (
        <div className={'d-flex m-2'}>
            <div className={'BtnGroup'}>
                {statuses.map((s) => (
                    <button
                        onClick={() => onStatusFilterChange(s)}
                        key={s}
                        className={`btn BtnGroup-item ${
                            statusFilters[s] ? 'selected' : ''
                        }`}
                    >
                        <StatusStateIcon state={s} />
                    </button>
                ))}
            </div>
            <div className={'BtnGroup'}>
                {displayTypes.map((dt) => {
                    const DisplayTypeComponent = displayTypesToComponent[dt];
                    return (
                        <button
                            key={dt}
                            onClick={() =>
                                onDisplayTypeChange((v) =>
                                    v !== dt ? dt : undefined,
                                )
                            }
                            className={`btn BtnGroup-item ${
                                displayType === dt ? 'selected' : ''
                            }`}
                        >
                            <DisplayTypeComponent />
                        </button>
                    );
                })}
            </div>
            <SearchInput onChange={onSearchInputChange} />
        </div>
    );
}
