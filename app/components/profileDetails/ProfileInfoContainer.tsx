import ProfileInfo from "./ProfileInfo";

interface ProfileInfoContainerProps {
  name: string;
  email: string;
  onEditName: (name: string) => void;
}

export default function ProfileInfoContainer(props: ProfileInfoContainerProps) {
  return (
    <div className="grid grid-flow-row items-starts text-center gap-4">
      <ProfileInfo
        label="Name"
        value={props.name}
        onChange={props.onEditName}
      />
      <ProfileInfo label="Email" value={props.email} />
    </div>
  );
}
