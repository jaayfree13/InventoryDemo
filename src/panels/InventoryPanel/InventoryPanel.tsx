import './InventoryPanel.css';
import { InventoryGrid } from '../../components/InventoryGrid/InventoryGrid';
import type { InventorySlotData } from '../../components/InventoryGrid/InventoryGrid';
import { Panel } from '../../components/Panel/Panel';

type InventoryPanelProps = {
	items: InventorySlotData[];
	selectedIdx?: number;
	onSelect: (idx: number) => void;
	isFocused?: boolean;
};

export function InventoryPanel({items, selectedIdx, onSelect, isFocused}: InventoryPanelProps) {
	return (
		<Panel title="Inventory" className={`panel--fixed panel--inventory ${isFocused ? 'panel--in-focus' : ''}`.trim()}>
			<section className='section-inventory'>
				<InventoryGrid
					items={items}
					selectedIdx={selectedIdx}
					size={[5, 4]}
					onSelect={onSelect}
				/>
			</section>
		</Panel>
	);
}
