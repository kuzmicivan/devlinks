import { ReactElement } from "react";

interface ProfileContainerProps {
  children: ReactElement;
}

export default function ProfileContainer(props: ProfileContainerProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-8 h-full w-full relative overflow-x-hidden">
      {props.children}
    </div>
  );
}
