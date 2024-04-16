import { ReactNode } from "react";

interface PhoneContainerProps {
  children: ReactNode;
}

export default function PhoneContainer(props: PhoneContainerProps) {
  return (
    <div className="hidden lg:flex bg-white rounded h-full w-2/5 justify-center items-center p-2">
      {props.children}
    </div>
  );
}
