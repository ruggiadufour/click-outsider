import * as React from "react";
import { useRef, ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import ClickOutsider, { elementActionType } from "click-outsider";

export interface PropType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClickOutside: elementActionType["callback"];
  children?: ReactNode;
}
export const ClickOutsiderWrapper = ({
  onClickOutside,
  children,
  ...props
}: PropType) => {
  const elementRef = useRef(0);

  React.useEffect(() => {
    const currentRef = elementRef.current;
    ClickOutsider.add(currentRef, onClickOutside);
    return () => ClickOutsider.remove(currentRef);
  }, []);

  return (
    <div ref={elementRef} {...props}>
      {children}
    </div>
  );
};
