import { platforms } from "@/app/data/platforms";
import Link from "../Link";
import { LinkProps } from "@/app/types/profileDetails";

interface LinksProps {
  links: LinkProps[];
  onRemoveLink: (link: LinkProps) => void;
  onEditLink: (link: LinkProps) => void;
}

export default function Links(props: LinksProps) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {props.links.map((link, id) => (
        <Link
          key={link.id}
          orderNumber={++id}
          link={link}
          platforms={platforms}
          onDeleteLink={() => props.onRemoveLink(link)}
          onLinkChange={props.onEditLink}
        />
      ))}
    </div>
  );
}
