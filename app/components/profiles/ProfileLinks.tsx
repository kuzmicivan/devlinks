import PhoneLink from "../phone/PhoneLink";
import { LinkProps } from "@/app/types/profileDetails";

interface ProfileLinksProps {
  profileLinks: LinkProps[];
}

export default function ProfileLinks(props: ProfileLinksProps) {
  return (
    <div className="flex-1 grid grid-flow-row gap-4 overflow-auto p-4 max-h-48 w-full">
      {props.profileLinks.map((link) => (
        <PhoneLink key={link.id} profileLink={link} />
      ))}
    </div>
  );
}
