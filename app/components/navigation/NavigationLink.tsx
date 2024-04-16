"use client";

import { getStyles, PageProps } from "@/app/data/navigationLink";
import Link from "next/link";

interface NavigationLinkProps {
  page: PageProps;
  isSelected?: boolean;
}

export default function NavigationLink(props: NavigationLinkProps) {
  return (
    <Link
      href={props.page.path}
      className={getStyles(props.page.style, props.isSelected)}
    >
      <span>{props.page.name}</span>
    </Link>
  );
}
