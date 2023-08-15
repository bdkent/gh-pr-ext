import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RootContent } from '@src/components/RootContent';
import css from './styles.module.css';

const RootID = 'pr-plus-root';

function initialize() {
    const elem = document.createElement('div');
    elem.id = RootID;
    elem.className = css.root;

    document.getElementsByTagName('body')[0].appendChild(elem);

    ReactDOM.render(<RootContent />, document.getElementById(RootID));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}
