import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode,
  variant?: string
};

function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button type="button" className={ `btn btn-${variant}` }>
      {children}
    </button>
  );
}

export default Button;
