import { ProfileProps as IProfile } from "@/app/types/profileDetails";
import ProfileContainer from "./ProfileContainer";
import ProfileDetails from "./ProfileDetails";
import ProfileLinks from "./ProfileLinks";

interface ProfileProps {
  profile: IProfile;
}

export default function Profile(props: ProfileProps) {
  return (
    <ProfileContainer>
      <>
        <ProfileDetails profile={props.profile} />
        <ProfileLinks profileLinks={props.profile.links} />
      </>
    </ProfileContainer>
  );
}
