import { ReactNode } from "react";

interface ActionContainerProps {
  headerComponent: ReactNode;
  actionComponent: ReactNode;
  saveComponent?: ReactNode;
}

export default function ActionContainer(props: ActionContainerProps) {
  return (
    <div className="bg-white flex-1 rounded flex flex-col justify-between divide-y-8">
      <div
        className={`flex flex-col gap-10 py-8 px-12 overflow-y-auto ${
          props.saveComponent && "h-[calc(100vh-248px)]"
        }`}
      >
        {props.headerComponent}
        {props.actionComponent}
      </div>
      {props.saveComponent && (
        <div className="px-12 py-6 bg-white h-24">{props.saveComponent}</div>
      )}
    </div>
  );
}
