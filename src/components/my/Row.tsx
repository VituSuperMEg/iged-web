import { ReactNode } from "react";

type RowT = {
  children: ReactNode;
};
export const Row = ({ children }: RowT) => {
  return <div className="flex flex-wrap gap-2 w-full">{children}</div>;
};
