import * as React from 'react';
import { ReactChildren } from 'react';

type Props = React.PropsWithChildren<{
    onClose: () => void;
}>;

export function Overlay(props: Props) {
    const { children, onClose } = props;

    return (
        <div
            className="Overlay-backdrop--side Overlay-backdrop--placement-right"
            onClick={onClose}
        >
            <div
                className={
                    'Overlay xOverlay-whenNarrow xOverlay--size-small-portrait Overlay--motion-scaleFade SidePanel'
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className="Overlay-header flex-row">
                    <div className="Overlay-headerContentWrap d-flex width-full">
                        <div className="Overlay-titleWrap flex-1">
                            <div className="d-flex">
                                <a href="/">
                                    <svg
                                        aria-hidden="true"
                                        height="24"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="24"
                                        data-view-component="true"
                                        className="octicon octicon-mark-github color-fg-default"
                                    >
                                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                </a>
                                <h3 className={'ml-3'}>PR Checks Status</h3>
                            </div>
                        </div>
                        <div className="Overlay-actionWrap">
                            <button
                                onClick={onClose}
                                data-close-dialog-id="dialog-a064152f-6ca5-463b-a36f-e274813cf0b8"
                                aria-label="Close"
                                type="button"
                                data-view-component="true"
                                className="close-button Overlay-closeButton"
                            >
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    className="octicon octicon-x"
                                >
                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Overlay-body d-flex flex-column height-full px-2">
                    {children}
                </div>
            </div>
        </div>
    );
}
