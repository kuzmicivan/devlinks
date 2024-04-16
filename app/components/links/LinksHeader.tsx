import LinksBanner from "./LinksBanner";

interface LinksHeaderProps {
  onAddNewLink: () => void;
}

export default function LinksHeader(props: LinksHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <LinksBanner />
      <button
        className={`text-purple-600 w-full font-medium border border-purple-600 hover:text-white hover:bg-purple-600 px-6 py-2 rounded`}
        onClick={props.onAddNewLink}
      >
        + Add new link
      </button>
    </div>
  );
}
