import { LinkProps } from "@/app/types/profileDetails";
import { ProfileDetailsProps } from "@/app/types/profileDetails";
import PhoneLinks from "./PhoneLinks";
import PhoneDetails from "./PhoneDetails";
import PhoneContainer from "./PhoneContainer";

interface PhoneProps {
  profileDetails?: ProfileDetailsProps;
  profileLinks: LinkProps[];
}

export default function Phone(props: PhoneProps) {
  return (
    <PhoneContainer>
      <>
        <PhoneDetails profileDetails={props.profileDetails} />
        <PhoneLinks profileLinks={props.profileLinks} />
      </>
    </PhoneContainer>
  );
}
