export type Item = {
    id: string;
    name: string;
    icon: string;
    category: string;
};

export const dummyInventory = [
	{ item: { id: 'sword', name: 'Sword', icon: '🗡️', category: 'Combat' }, quantity: 1 },
	{ item: { id: 'health_potion', name: 'Health Potion', icon: '🧪', category: 'Consumable' }, quantity: 5 },
	{ item: { id: 'shield', name: 'Shield', icon: '🛡️', category: 'Combat' }, quantity: 1 },
	{ item: { id: 'bow', name: 'Bow', icon: '🏹', category: 'Combat' }, quantity: 1 },
	{ item: { id: 'arrow', name: 'Arrow', icon: '🪢', category: 'Combat' }, quantity: 20 },
	{ item: { id: 'magic_scroll', name: 'Magic Scroll', icon: '📜', category: 'Magic' }, quantity: 2 },
	{ item: { id: 'helmet', name: 'Helmet', icon: '🪖', category: 'Combat' }, quantity: 1 },
	{ item: { id: 'boots', name: 'Boots', icon: '👢', category: 'Combat' }, quantity: 1 },
	{ item: null},
	{ item: null, quantity: 0 },
	{ item: { id: 'ring_of_strength', name: 'Ring of Strength', icon: '💍', category: 'Combat' }, quantity: 1 },
	{ item: { id: 'mana_potion', name: 'Mana Potion', icon: '🧪', category: 'Consumable' }, quantity: 3 },
	{ item: null, quantity: 0 },
	{ item: null, quantity: 0 },
	{ item: { id: 'enchanted_rune', name: 'Enchanted Rune', icon: '🪨', category: 'Magic' }, quantity: 3 },
	{ item: { id: 'arrow', name: 'Arrow', icon: '🪢', category: 'Combat' }, quantity: 20 },
	{ item: { id: 'magic_scroll', name: 'Magic Scroll', icon: '📜', category: 'Magic' }, quantity: 2 },
	{item: null},
	{ item: { id: 'helmet', name: 'Helmet', icon: '🪖', category: 'Combat' }, quantity: 1 },
	{ item: null},
]