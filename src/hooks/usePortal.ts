import { useEffect, useRef } from 'react';

function createRoot(id: string): HTMLDivElement {
    const root = document.createElement('div');
    root.setAttribute('id', id);
    return root;
}

function addRoot(root: HTMLDivElement): void {
    document.body.insertAdjacentElement('beforeend', root);
}

export function usePortal(id: string): HTMLDivElement | null {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = getRoot();
        if (typeof document !== 'undefined' && element) {
            const existingParent = document.getElementById(
                id,
            ) as HTMLDivElement | null;
            const parent = existingParent || createRoot(id);

            if (!existingParent) {
                addRoot(parent);
            }
            parent.appendChild(element);

            return () => {
                element.remove();
                if (!parent.childElementCount) {
                    parent.remove();
                }
            };
        }
    }, [id]);

    function getRoot(): HTMLDivElement | null {
        if (!rootRef.current && typeof document !== 'undefined') {
            rootRef.current = document.createElement('div');
        }
        return rootRef.current;
    }

    return getRoot();
}
