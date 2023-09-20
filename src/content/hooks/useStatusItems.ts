import { useEffect, useState } from 'react';
import { StatusItem } from '@src/content/types';
import { compareStrings, toStatusItem } from '@src/content/utils';

export function useStatusItems(): StatusItem[] | undefined {
  const [items, setItems] = useState<StatusItem[] | undefined>();

  useEffect(() => {
    const id = setInterval(() => {
      const chart = document.querySelector(
        '.mergeability-details svg.donut-chart',
      );
      const list = chart?.closest('.merge-status-list');
      const elems = list?.querySelectorAll('.merge-status-item') ?? [];
      const newItems = Array.from(elems).map((e) =>
        toStatusItem(e as HTMLElement),
      );
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
