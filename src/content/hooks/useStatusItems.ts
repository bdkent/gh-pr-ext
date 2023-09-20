import { useEffect, useState } from 'react';
import { StatusItem } from '@src/content/types';
import {
  compareStrings,
  getBranchActionItem,
  toStatusItem,
} from '@src/content/utils';

function getElems(): Element[] {
  const list = getBranchActionItem()?.querySelectorAll(
    '.merge-status-list .merge-status-item',
  );
  return Array.from(list ?? []);
}

export function useStatusItems(): StatusItem[] | undefined {
  const [items, setItems] = useState<StatusItem[] | undefined>();

  useEffect(() => {
    const id = setInterval(() => {
      const elems = getElems();
      const newItems = elems.map((e) => toStatusItem(e as HTMLElement));
      newItems.sort(({ message: a = '' }, { message: b = '' }) => {
        return compareStrings(a, b);
      });
      setItems(newItems);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return items;
}
