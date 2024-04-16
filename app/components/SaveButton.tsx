interface SaveButtonProps {
  isDataChanged: boolean;
  onSave: () => void;
}

export default function SaveButton(props: SaveButtonProps) {
  return (
    <div className="flex justify-end">
      <button
        className={`text-white font-medium ${
          !props.isDataChanged
            ? "bg-purple-200 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-500"
        } px-6 py-2 rounded`}
        onClick={props.onSave}
        disabled={!props.isDataChanged}
      >
        Save
      </button>
    </div>
  );
}
