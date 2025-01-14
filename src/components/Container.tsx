import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <main className="container">{children}</main>;
};
