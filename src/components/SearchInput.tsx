import * as React from 'react';

type Props = {
    onChange: (value: string) => void;
};

export function SearchInput(props: Props) {
    const { onChange } = props;

    return (
        <div className="subnav-search flex-1">
            <input
                type="text"
                className="form-control input-block pl-5"
                placeholder="Filter"
                autoComplete="off"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
            <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-search subnav-search-icon"
            >
                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
        </div>
    );
}
