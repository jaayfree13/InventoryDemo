import './Button.css';
import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    isFocused?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
};

export function Button({ children, variant = 'primary', isFocused = false, isDisabled = false, onClick }: ButtonProps) {
    return (
        <button
        className={`button button--${variant} ${isFocused ? "button--focused" : ""}`.trim()}
        disabled={isDisabled}
        onClick={onClick}
        type="button"
        >
        {children}
        </button>
    );
}
