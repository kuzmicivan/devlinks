"use client";

import pages, { NavigationLinkStyle } from "../../data/navigationLink";
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";
import NavigationLinkProps from "./NavigationLink";
import NavigationContainer from "./NavigationContainer";

export default function Navigation() {
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <NavigationContainer>
      <NavigationLinkProps page={pages[0]} />
      <div className="flex gap-4">
        {user &&
          pages
            .slice(1)
            .map((page) => (
              <NavigationLinkProps
                key={page.name}
                page={page}
                isSelected={pathname === page.path}
              />
            ))}
        <NavigationLinkProps
          page={{
            path: `/api/auth/${user ? "logout" : "login"}`,
            name: user ? "Logout" : "Login",
            style: NavigationLinkStyle.LOG,
          }}
        />
      </div>
    </NavigationContainer>
  );
}
