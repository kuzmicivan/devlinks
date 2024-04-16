import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer(props: PageContainerProps) {
  return <div className="flex gap-2 h-full">{props.children}</div>;
}
