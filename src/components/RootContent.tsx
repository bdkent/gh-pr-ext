import { useButtonIcon } from '@src/content/hooks/useButtonIcon';
import { useState } from 'react';
import { Overlay } from '@src/components/Overlay';
import { StatusItemsContainer } from '@src/components/StatusItemsContainer';
import * as React from 'react';

export function RootContent() {
    const { buttonRef, init } = useButtonIcon();

    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowOverlay(true)}
                style={{ visibility: init ? 'visible' : 'hidden' }}
                className="Button"
                ref={buttonRef}
            ></button>
            {showOverlay && (
                <Overlay onClose={() => setShowOverlay(false)}>
                    <StatusItemsContainer />
                </Overlay>
            )}
        </div>
    );
}
