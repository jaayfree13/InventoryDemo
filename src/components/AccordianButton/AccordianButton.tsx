import './AccordianButton.css';
import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    isSelected: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
};

export function AccordianButton({ children, isSelected = false, isDisabled = false, onClick }: ButtonProps) {
    return (
        <button
        className={`accordian-button ${isSelected ? "accordian-button--selected": ""}`.trim()}
        disabled={isDisabled}
        onClick={onClick}
        type="button"
        >
        {children}
        </button>
    );
}
