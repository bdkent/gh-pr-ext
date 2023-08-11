import { useEffect, useState } from "react";
import { StatusItem } from "@src/content/types";
import { compareStrings, toStatusItem } from "@src/content/utils";

export function useStatusItems() {
    const [items, setItems] = useState<StatusItem[] | undefined>();

    useEffect(() => {
        const id = setInterval(() => {
            const elems = document.querySelectorAll(
                ".mergeability-details .merge-status-list .merge-status-item",
            );
            const newItems = Array.from(elems).map((e) =>
                toStatusItem(e as HTMLElement),
            );
            newItems.sort(({ message: a = "" }, { message: b = "" }) => {
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
