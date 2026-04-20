import { InventoryPanel } from "./panels/InventoryPanel/InventoryPanel";
import { Panel } from "./components/Panel/Panel";
import { useState } from "react";
import { dummyInventory } from "./data/dummyData";

export default function App() {

	const [selectedIdx, setSelectedIdx] = useState(-1);
	const [focused, setFocused] = useState(true);

	return (
		<div className="App">
			<section className="hero">
				<h1 className="title">Inventory UI Demo</h1>
				<Panel title="Top Bar">This is a UI system prototype focused on structure and interaction, not a full implementation and is just for demostration.</Panel>
			</section>
			<section className="content">
				<InventoryPanel
					items={dummyInventory}
					selectedIdx={selectedIdx}
					onSelect={setSelectedIdx}
					isFocused={focused}
				></InventoryPanel>
				<Panel
					title="Right Panel"
					className="panel--fixed"
				>No current station.</Panel>
			</section>
		</div>
	);
}
