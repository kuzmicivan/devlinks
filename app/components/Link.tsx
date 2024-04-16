import { ElementType, useCallback, useState } from "react";
import Dropdown, { DropdownValue } from "./Dropdown";
import Input from "./Input";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";
import { LinkProps as ILink } from "@/app/types/profileDetails";

interface LinkProps {
  platforms: {
    icon: ElementType;
    name: string;
  }[];
  link: ILink;
  orderNumber?: number;
  onLinkChange: (link: ILink) => void;
  onDeleteLink: () => void;
}

export default function Link(props: LinkProps) {
  const [link, setLink] = useState<ILink>(props.link);

  const onPlatformChange = useCallback((platform: DropdownValue) => {
    setLink((prevLink) => {
      const editedLink = { ...prevLink, platform: platform.name };
      props.onLinkChange(editedLink);
      return editedLink;
    });
  }, []);

  const onLinkChange = useCallback((url: string) => {
    setLink((prevLink) => {
      const editedLink = { ...prevLink, url: url };
      props.onLinkChange(editedLink);
      return editedLink;
    });
  }, []);

  return (
    <div className="bg-zinc-100 p-6 rounded">
      <div className="flex justify-between">
        <h1 className="text-md font-medium text-zinc-800">
          {props.orderNumber ? `Link #${props.orderNumber}` : "New Link"}
        </h1>
        <button
          className="text-md text-zinc-500 hover:text-zinc-950"
          onClick={props.onDeleteLink}
        >
          Remove
        </button>
      </div>
      <Dropdown
        label="Platform"
        value={{
          name: link.platform,
          icon: props.platforms.find(
            (platform) => platform.name === link.platform
          )?.icon,
        }}
        onValueChange={onPlatformChange}
        values={props.platforms}
        defaultIcon={ShareIcon}
      />
      <Input
        icon={LinkIcon}
        label="Link"
        value={link.url}
        onInputChange={onLinkChange}
      />
    </div>
  );
}
