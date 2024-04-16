export interface PageProps {
  name: string;
  path: string;
  style: NavigationLinkStyle;
}

export enum NavigationLinkStyle {
  HOME = "HOME",
  LINK = "LINK",
  LOG = "LOG",
}

export const getStyles = (
  style: NavigationLinkStyle,
  isSelected?: boolean
): string => {
  switch (style) {
    case NavigationLinkStyle.HOME:
      return "text-xl text-zinc-800 font-medium";
    case NavigationLinkStyle.LINK:
      return `flex justify-center items-center text-center text-purple-600 hover:text-purple-800 hover:bg-purple-200 px-2 sm:px-4 py-1 sm:py-2 rounded cursor-pointer ${
        isSelected ? "bg-purple-100" : ""
      }`;
    case NavigationLinkStyle.LOG:
      return "flex justify-center items-center text-purple-600 border border-purple-600 hover:text-white hover:bg-purple-600 px-2 sm:px-4 py-1 sm:py-2 rounded";
    default:
      return "";
  }
};

export type PageContextType = {
  selectedPage: PageProps | null;
  setSelectedPage: (page: PageProps) => void;
};

const pages: PageProps[] = [
  {
    name: "devlinks",
    path: "/",
    style: NavigationLinkStyle.HOME,
  },
  {
    name: "Links",
    path: "/links",
    style: NavigationLinkStyle.LINK,
  },
  {
    name: "Profile Details",
    path: "/profile-details",
    style: NavigationLinkStyle.LINK,
  },
];

export default pages;
