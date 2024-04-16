import { ProfileProps as IProfile } from "@/app/types/profileDetails";

interface ProfileDetailsProps {
  profile: IProfile;
}

export default function ProfileDetails(props: ProfileDetailsProps) {
  return (
    <div className="flex flex-col items-start justify-center w-3/5 h-full gap-2">
      <div className="w-20 h-20 bg-gray-200 rounded-full p-1">
        {props.profile?.picture && (
          <img
            src={props.profile?.picture}
            className="rounded-full h-full w-full overflow-hidden"
          />
        )}
      </div>
      <div
        className={` text-start overflow-hidden text-ellipsis whitespace-nowrap w-full ${
          props.profile?.name
            ? "text-gray-800 font-semibold"
            : "bg-gray-200 w-32 rounded-lg"
        }`}
      >
        {props.profile?.name}
      </div>
      <div
        className={`text-start overflow-x-hidden text-ellipsis whitespace-nowrap w-full ${
          props.profile?.email
            ? "text-gray-400 text-xs"
            : "bg-gray-200 w-20 rounded-lg"
        }`}
      >
        {props.profile?.email}
      </div>
    </div>
  );
}
