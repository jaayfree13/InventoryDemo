import './Modal.css';
import type { ReactNode } from 'react';

type ModalProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

export function Modal({ title, children, className = '' }: ModalProps) {
    return (
        <div className="modal-backdrop">
            <section className={`modal ${className}`.trim()}>
                <h2 className="modal__title">{title}</h2>
                {children}
            </section>
        </div>
    );
}
