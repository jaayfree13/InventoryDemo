import { InventoryPanel } from "./panels/InventoryPanel/InventoryPanel";
import { Panel } from "./components/Panel/Panel";
import { useState } from "react";
import { dummyInventory } from "./data/dummyData";
import { useKeyboardInput } from './hooks/useKeyboardInput';
import { initialUIState } from './state/UIState';
import type { UIState } from './state/UIState';
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";

export default function App() {
	const [ui, setUI] = useState<UIState>({
		...initialUIState
	});

	useKeyboardInput({
		ui,
		setUI,
		pauseSize: 5,
		inventorySize: [5, 4],
		rightItemSize: 0,
		categorySize: 3, // Combat, Consumable, Magic
	});

	return (
		<main className="App">
			<section className="hero">
				<h1 className="title">Inventory UI Demo</h1>
				<Panel>
					<text>This is a UI system prototype focused on structure and interaction, not a full implementation and is just for demostration.</text>
					<text>Keyboard Controls:</text>
					<text><b>Esc</b> for pause and to exit a work station</text>
					<text><b>Tab</b> to switch focus between panels</text>
					<text><b>Arrow Keys</b> or <b>WASD</b> for navigation</text>
					<text><b>EFCV</b> to switch to a different work station</text>
				</Panel>
			</section>
			<section className="content">
				<InventoryPanel
					items={dummyInventory}
					selectedIdx={ui.selectedLeftIndex}
					isFocused={ui.focusRegion == "left"}
				></InventoryPanel>
				{
					ui.panelMode == "none" ? <Panel
						title="Right Panel"
						className="panel--fixed"
					>No current work station.</Panel> : null
				}
				{
					ui.panelMode == "details" ? <Panel
						title="Item Details"
						className="panel--fixed"
					>Show accordian and scroll lists.</Panel> : null
				}
				{
					ui.panelMode == "crafting" ? <Panel
						title="Crafting Table"
						className="panel--fixed"
					>Search recipes and tabs.</Panel> : null
				}
				{
					ui.panelMode == "chest" ? <Panel
						title="Chest"
						className="panel--fixed"
					>Show tooltip and settings buttons</Panel> : null
				}
				{
					ui.panelMode == "smelting" ? <Panel
						title="Furnace"
						className="panel--fixed"
					>Show progress in a station.</Panel> : null
				}
			</section>

			{ui.isPauseOpen && (
				<Modal title="Pause Menu" className="modal-menu">
					<Button isFocused={ui.selectedRightIndex == 0}>Back to Game</Button>
					<Button isFocused={ui.selectedRightIndex == 1}>Advancements</Button>
					<Button isFocused={ui.selectedRightIndex == 2} isDisabled={true}>Options</Button>
					<Button variant="secondary" isFocused={ui.selectedRightIndex == 3}>Marketplace</Button>
					<Button variant="ghost" isFocused={ui.selectedRightIndex == 4}>Quit to Title</Button>
				</Modal>
			)}
		</main>
	);
}
