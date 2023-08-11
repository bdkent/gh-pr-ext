import { useEffect, useRef, useState } from "react";

export function useButtonIcon() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const svgRef = useRef<Node | undefined>();
    const [init, setInit] = useState(false);

    // eslint-disable-next-line react/no-unescaped-entities
    useEffect(() => {
        const id = setInterval(() => {
            if (buttonRef.current) {
                const chart = document.querySelector(
                    ".mergeability-details svg.donut-chart",
                );
                if (chart) {
                    const svg = chart.cloneNode(true);
                    if (svgRef.current) {
                        buttonRef.current?.replaceChild(svg, svgRef.current);
                    } else {
                        buttonRef.current?.appendChild(svg);
                    }
                    svgRef.current = svg;
                    setInit(true);
                } else {
                    if (svgRef.current) {
                        buttonRef.current?.removeChild(svgRef.current);
                    }
                }
            }
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return { buttonRef, init };
}