import { ReactElement } from "react";

interface PhoneContainerProps {
  children: ReactElement;
}

export default function PhoneContainer(props: PhoneContainerProps) {
  return (
    <div className="p-5 h-2/3 w-2/5 rounded-[3rem] bg-purple-800">
      <div className="flex flex-col items-center px-2 pb-2 h-full w-full  rounded-[2rem] bg-white relative">
        <div className="rounded-b-xl bg-purple-800 h-5 w-3/5" />
        {props.children}
      </div>
    </div>
  );
}
