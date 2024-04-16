import { useState } from "react";
import { LinkProps } from "@/app/types/profileDetails";
import { platforms } from "@/app/data/platforms";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface PhoneLinkProps {
  profileLink: LinkProps;
}

function mapPlatformColors(platform: string) {
  switch (platform) {
    case "Github": {
      return "bg-black hover:bg-gray-800";
    }
    case "Youtube": {
      return "bg-red-500 hover:bg-red-400";
    }
    case "LinkedIn": {
      return "bg-blue-600 hover:bg-blue-500";
    }
    case "X": {
      return "bg-black hover:bg-gray-800";
    }
    default: {
      return "bg-black hover:bg-gray-800";
    }
  }
}

export default function PhoneLink(props: PhoneLinkProps) {
  const [copySuccess, setCopySuccess] = useState("");

  const PlatformIcon = platforms.find(
    (platform) => platform.name === props.profileLink.platform
  )?.icon;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(props.profileLink.url);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
    setTimeout(() => setCopySuccess(""), 1000);
  }

  return (
    <div
      className={`${mapPlatformColors(
        props.profileLink.platform
      )} cursor-pointer rounded flex p-2 justify-between items-center relative`}
      onClick={copyToClipboard}
    >
      <div className="flex justify-center items-center gap-1">
        <PlatformIcon />
        <span className="hidden xl:flex">{props.profileLink.platform}</span>
      </div>
      <ContentCopyIcon fontSize="small" />
      {copySuccess && (
        <span className="absolute -bottom-4 right-1 z-100 bg-gray-700 text-white px-2 py-1 text-xs rounded">
          {copySuccess}
        </span>
      )}
    </div>
  );
}
