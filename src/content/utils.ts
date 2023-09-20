import { StatusItem, StatusState } from '@src/content/types';

export function toStatusState(elem: HTMLElement): StatusState | undefined {
    try {
        if (elem.querySelector('svg.octicon-check')) {
            return 'success';
        } else if (elem.querySelector('svg.octicon-stop')) {
            return 'cancelled';
        } else if (elem.querySelector('svg.octicon-skip')) {
            return 'skip';
        } else if (elem.querySelector('svg.octicon-dot-fill')) {
            return 'pending';
        } else if (elem.querySelector('svg.anim-rotate')) {
            return 'progress';
        } else if (elem.querySelector('svg.octicon-x')) {
            return 'failing';
        } else {
            // some things don't have status messages but still have the check?
            return undefined;
        }
    } catch (e) {
        console.log(elem, e);
        return undefined;
    }
}

export function toStatusItem(node: HTMLElement): StatusItem {
    const elem = node.cloneNode(true) as HTMLElement;

    const statusIconElem = elem.querySelector(
        '.merge-status-icon',
    ) as HTMLElement | null;
    const iconElem = elem.querySelector('a img.avatar');

    const msgElem = elem.querySelector(
        '.css-truncate.css-truncate-target',
    ) as HTMLElement | null;

    const note = msgElem?.innerText
        .replace(msgElem?.querySelector('strong')?.innerText ?? '', '')
        ?.replace(/\s+/, ' ')
        .trim();

    const message = msgElem
        ?.querySelector('strong')
        ?.innerText?.replace(/\s+/, ' ')
        .trim();

    const path = message?.split(' / ') ?? [];

    const detailsElem = elem.querySelector('div a.status-actions');

    return {
        status: statusIconElem ? toStatusState(statusIconElem) : undefined,
        icon: iconElem?.getAttribute('src') ?? undefined,
        message: message,
        note,
        path: path.length > 1 ? path?.[0] : undefined,
        detailsLink: detailsElem?.getAttribute('href') ?? undefined,
    };
}

export function compareStrings(x: string, y: string): number {
    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
    return 0;
}

export function getActiveStatusStates(items: StatusItem[]): StatusState[] {
    const activeStatuses = items.reduce((set, item) => {
        return item.status ? set.add(item.status) : set;
    }, new Set<StatusState>());

    return (
        [
            'failing',
            'cancelled',
            'progress',
            'pending',
            'skip',
            'success',
        ] as const
    ).filter((s) => activeStatuses.has(s));
}
