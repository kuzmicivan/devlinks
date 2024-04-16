import Input from "../Input";

interface ProfileInfoProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}

export default function ProfileInfo(props: ProfileInfoProps) {
  return (
    <div className="bg-zinc-200 flex flex-col sm:flex-row rounded justify-between sm:items-center text-left px-6 py-4">
      <label className="text-zinc-600 w-1/2">{props.label}</label>
      <div className="flex-1">
        <Input value={props.value} onInputChange={props.onChange} />
      </div>
    </div>
  );
}
