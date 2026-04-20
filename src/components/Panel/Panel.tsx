import type { ReactNode } from 'react';
import './Panel.css';

type PanelProps = {
    title?: string;
    children: ReactNode;
    className?: string;
  };

  export function Panel({ title, children, className = '' }: PanelProps) {
    return (
      <section className={`panel ${className}`.trim()}>
        {title ? <h2 className="panel__title">{title}</h2> : null}
        {children}
      </section>
    );
  }
