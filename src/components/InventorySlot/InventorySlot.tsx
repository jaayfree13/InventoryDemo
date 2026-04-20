import './InventorySlot.css';

type InventorySlotProps = {
    label: string;
    icon?: string;
    quantity?: number;
    selected?: boolean;
    onClick?: () => void;
};

export function InventorySlot({ label = 'Empty slot', icon, quantity, selected = false, onClick }: InventorySlotProps) {
	return (
		<button
		type="button"
		className={`inventory-slot ${selected ? 'inventory-slot--selected' : ''}`.trim()}
		aria-label={label}
		onClick={onClick}
		>
		<span className="inventory-slot__icon" aria-hidden="true">
			{icon ?? ''}
		</span>
		{quantity ? <span className="inventory-slot__quantity">{quantity}</span> : null}
		</button>
	);
}
