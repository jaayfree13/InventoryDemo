type PanelMode = "none" | "details" | "crafting" | "chest" | "smelting";
type FocusRegion = "left" | "right" | "pause";

export type UIState = {
    panelMode: PanelMode;
    focusRegion: FocusRegion;
    isPauseOpen: boolean;

    selectedLeftIndex: number;
    selectedRightIndex: number;
    selectedCategoryIndex: number;
};

export const initialUIState: UIState = {
    panelMode: "none",
    focusRegion: "left",
    isPauseOpen: false,

    selectedLeftIndex: -1,
    selectedRightIndex: 0,
    selectedCategoryIndex: 0,
};