import { useEffect } from "react";
import type { UIState } from "../state/UIState";

type UseUIKeyboardArgs = {
    ui: UIState;
    setUI: React.Dispatch<React.SetStateAction<UIState>>;
    pauseSize: number;
    inventorySize: [number, number];
    rightItemSize: number;
    categorySize: number;
};

export function useKeyboardInput({
    setUI,
    pauseSize,
    inventorySize,
    rightItemSize,
    categorySize,
}: UseUIKeyboardArgs) {
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            setUI((prev) => {
                // Pause toggle
                if (e.key === "Escape") {
                    e.preventDefault();
                    if (prev.panelMode !== "none") return {...prev, panelMode: "none"};
                    return {
                        ...prev,
                        isPauseOpen: !prev.isPauseOpen,
                        focusRegion: !prev.isPauseOpen ? "pause" : "left",
                        selectedRightIndex: 0,
                    };
                }

                // Cycle Pause
                if (prev.isPauseOpen) {
                    if (e.key === "ArrowUp" || e.key === "w") {
                        e.preventDefault();
                        return {
                            ...prev,
                            selectedRightIndex: Math.max(0, prev.selectedRightIndex - 1),
                        };
                    }

                    if (e.key === "ArrowDown" || e.key === "s") {
                        e.preventDefault();
                        return {
                            ...prev,
                            selectedRightIndex: Math.min(pauseSize - 1, prev.selectedRightIndex + 1),
                        };
                    }

                    return prev;
                }

                // Mode switching
                if (e.key.toLowerCase() === "e") {
                    e.preventDefault();
                    return { ...prev, panelMode: "details", focusRegion: "left" };
                }

                if (e.key.toLowerCase() === "c") {
                    e.preventDefault();
                    return { ...prev, panelMode: "crafting", focusRegion: "right", selectedRightIndex: 0 };
                }

                if (e.key.toLowerCase() === "f") {
                    e.preventDefault();
                    return { ...prev, panelMode: "chest", focusRegion: "right", selectedRightIndex: 0 };
                }

                if (e.key.toLowerCase() === "v") {
                e.preventDefault();
                return { ...prev, panelMode: "smelting", focusRegion: "right", selectedRightIndex: 0 };
                }

                // Region switch
                if (e.key === "Tab") {
                    e.preventDefault();
                    return {
                        ...prev,
                        focusRegion: prev.focusRegion === "left" ? "right" : "left",
                    };
                }

                // Left region: inventory grid
                if (prev.focusRegion === "left") {
                    if (
                        e.key === "ArrowUp" ||
                        e.key === "ArrowDown" ||
                        e.key === "ArrowLeft" ||
                        e.key === "ArrowRight" ||
                        e.key === "w" ||
                        e.key === "a" ||
                        e.key === "s" ||
                        e.key === "d"
                    ) {
                        e.preventDefault();

                        if (prev.selectedLeftIndex < 0) {
                            return {
                                ...prev,
                                selectedLeftIndex: 0,
                            };
                        }

                        const row = Math.floor(prev.selectedLeftIndex / inventorySize[0]);
                        const col = prev.selectedLeftIndex % inventorySize[0];

                        let nextRow = row;
                        let nextCol = col;

                        if (e.key === "ArrowUp" || e.key === "w") nextRow = row == 0 ? inventorySize[1] - 1 : Math.max(0, row - 1);
                        if (e.key === "ArrowDown" || e.key === "s") nextRow = row == inventorySize[1] - 1 ? 0 : Math.min(inventorySize[1] - 1, row + 1);
                        if (e.key === "ArrowLeft" || e.key === "a") nextCol = col == 0 ? inventorySize[0] - 1 : Math.max(0, col - 1);
                        if (e.key === "ArrowRight" || e.key === "d") nextCol = col == inventorySize[0] - 1 ? 0 : Math.min(inventorySize[0] - 1, col + 1);

                        return {
                            ...prev,
                            selectedLeftIndex: nextRow * inventorySize[0] + nextCol,
                        };
                    }
                }

                // Right region: lists / tabs
                if (prev.focusRegion === "right") {
                    if (e.key === "ArrowUp" || e.key === "w") {
                        e.preventDefault();
                        return {
                            ...prev,
                            selectedRightIndex: Math.max(0, prev.selectedRightIndex - 1),
                        };
                    }

                    if (e.key === "ArrowDown" || e.key === "s") {
                        e.preventDefault();
                        return {
                            ...prev,
                            selectedRightIndex: Math.min(rightItemSize - 1, prev.selectedRightIndex + 1),
                        };
                    }

                    // Tabs
                    if (
                        prev.panelMode === "crafting" &&
                        (e.key === "z" || e.key === "x")
                    ) {
                        e.preventDefault();
                        const dir = e.key === "x" ? 1 : -1;
                        return {
                            ...prev,
                            selectedCategoryIndex: (prev.selectedCategoryIndex + dir + categorySize) % categorySize,
                            selectedRightIndex: 0,
                        };
                    }
                }

                return prev;
            });
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [setUI, pauseSize, inventorySize, rightItemSize, categorySize]);
}