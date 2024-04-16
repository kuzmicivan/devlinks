import { ProfileProps } from "@/app/types/profileDetails";
import Profile from "./Profile";

interface ProfilesProps {
  profiles: ProfileProps[];
}

export default function Profiles(props: ProfilesProps) {
  return (
    <div className="grid grid-flow-row items-starts text-center gap-4 divide-y-2">
      {props.profiles?.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
