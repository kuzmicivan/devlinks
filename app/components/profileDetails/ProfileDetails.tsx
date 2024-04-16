import { ReactNode } from "react";

interface ProfileDetailsProps {
  children: ReactNode;
}

export default function ProfileDetails(props: ProfileDetailsProps) {
  return (
    <div className="grid grid-flow-row w-full h-full relative gap-6 py-2">
      {props.children}
    </div>
  );
}
