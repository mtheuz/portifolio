import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: Props) {
  const defaultClass = "w-full px-8 mx-auto pt-24";
  const clasNameFinal = twMerge(defaultClass, className);
  return <div className={clasNameFinal}>{children}</div>;
}

export default Container;