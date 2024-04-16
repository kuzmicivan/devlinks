import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Platform {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  name: string;
}

export const platforms: Platform[] = [
  {
    icon: GitHubIcon,
    name: "Github",
  },
  {
    icon: YouTubeIcon,
    name: "Youtube",
  },
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
  },
  {
    icon: XIcon,
    name: "X",
  },
];
