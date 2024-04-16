"use client";

import Navigation from "../navigation/Navigation";

interface ProfileClientProps {
  children: React.ReactNode;
}

export default function AppContainer(props: ProfileClientProps) {
  return (
    <main className="bg-zinc-200 p-6 flex flex-col gap-6">
      <Navigation />
      <div className="h-[calc(100vh-152px)] overflow-auto w-full gap-6">
        {props.children}
      </div>
    </main>
  );
}
