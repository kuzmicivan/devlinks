import { LinkProps } from "@/app/types/profileDetails";
import PhoneLink from "./PhoneLink";

interface PhoneLinksProps {
  profileLinks: LinkProps[];
}

export default function PhoneLinks(props: PhoneLinksProps) {
  return (
    <div className="grid grid-flow-row gap-4 overflow-auto w-full p-4 mb-4">
      {props.profileLinks?.map((link) => (
        <PhoneLink key={link.id} profileLink={link} />
      ))}
    </div>
  );
}
