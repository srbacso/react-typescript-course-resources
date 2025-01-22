import {ElementType, ReactNode, ComponentPropsWithoutRef} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType = "div">({
                                                    as,
                                                    children,
                                                    ...props
                                                  }: ContainerProps<C>) {
  const Component = as || "div"; // Default to 'div' if "as" is not supplied

  return <Component {...props}>{children}</Component>;
};

export default Container;