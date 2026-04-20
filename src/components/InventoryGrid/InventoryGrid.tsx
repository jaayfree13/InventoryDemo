import { InventorySlot } from '../InventorySlot/InventorySlot';
import type { Item } from '../../data/dummyData';
import './InventoryGrid.css';

export type InventorySlotData = {
    item: Item | null;
    quantity?: number;
}

type InventoryGridProps = {
    items: InventorySlotData[];
    selectedIdx?: number;
    size: [number, number]; // [cols, rows]
};

export function InventoryGrid({ items, selectedIdx, size }: InventoryGridProps) {
    const gridStyle: React.CSSProperties = {
        '--inventory-cols': size[0],
        '--inventory-rows': size[1],
    } as React.CSSProperties;

    return (
        <div className="inventory-grid" style={gridStyle}>
        {items.map((slot, idx) => (
            <InventorySlot
            key={idx}
            icon={slot.item?.icon}
            label={slot.item?.name ?? 'Empty slot'}
            quantity={slot.quantity}
            selected={idx === selectedIdx}
            />
        ))}
        </div>
    );
}
