import { ProfileDetailsProps } from "@/app/types/profileDetails";

interface PhoneDetailsProps {
  profileDetails?: ProfileDetailsProps;
}

export default function PhoneDetails(props: PhoneDetailsProps) {
  return (
    <div className="flex flex-col items-center p-7 w-full">
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-8 p-1">
        {props.profileDetails?.picture && (
          <img
            src={props.profileDetails?.picture}
            className="rounded-full h-full w-full overflow-hidden"
          />
        )}
      </div>
      <div
        className={`h-5 mb-2 ${
          props.profileDetails?.name
            ? "text-gray-800 font-semibold text-center overflow-hidden text-ellipsis whitespace-nowrap w-full"
            : "bg-gray-200 w-32 rounded-lg"
        }`}
      >
        {props.profileDetails?.name}
      </div>
      <div
        className={`h-4 ${
          props.profileDetails?.email
            ? "text-gray-400 text-xs text-center overflow-hidden text-ellipsis whitespace-nowrap w-full"
            : "bg-gray-200 w-20 rounded-lg mx-10"
        }`}
      >
        {props.profileDetails?.email}
      </div>
    </div>
  );
}
