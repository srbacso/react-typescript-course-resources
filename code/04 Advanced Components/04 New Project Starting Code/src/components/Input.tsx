import {ComponentPropsWithoutRef, forwardRef} from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({label, id, ...props}, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} ref={ref} {...props} />
      </p>
    );
  }
);

export default Input;