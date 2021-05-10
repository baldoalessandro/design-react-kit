import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface DimmerButtonsProps extends HTMLAttributes<HTMLElement> {
  /** Le varianti di colore definite in Bootstrap Italia per il componente Dimmer */
  color?: 'primary' | string;
  /** Classi aggiuntive da usare per il componente Dimmer */
  className?: string;
  /** Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto. */
  single?: boolean;
}

export const DimmerButtons: FC<DimmerButtonsProps> = ({
  color,
  className,
  single = false,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames('dimmer-buttons', 'bg-dark', className, {
    'single-button': single
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
