"use client";

import { ReactNode } from "react";

interface NavigationContainerProps {
  children: ReactNode;
}

export default function NavigationContainer(props: NavigationContainerProps) {
  return (
    <div className="grid w-full rounded bg-white h-20 items-center px-10 py-2">
      <div className="flex justify-between items-center gap-2">
        {props.children}
      </div>
    </div>
  );
}
