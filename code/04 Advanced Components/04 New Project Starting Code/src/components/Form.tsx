import {type ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef} from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & { onSave: (value: unknown) => void };

export type FormHandle = {
  clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(({onSave, children, ...otherProps}, ref) => {
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () =>{
    return {
      clear() {
        console.log('Clearing');
        formRef.current?.reset();
      }
    }
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)
    onSave(data)
    formRef.current?.clear();
  }

  return (
    <>
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    </>
  )
});

export default Form;
