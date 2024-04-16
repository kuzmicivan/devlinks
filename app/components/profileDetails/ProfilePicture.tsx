import { convertFileToBase64, toBase64 } from "@/app/utils/buffer";
import React, { useRef, useState } from "react";

interface ProfilePictureProps {
  label: string;
  picture: string;
  name: string;
  onEditProfilePicture: (picture: string) => void;
}

export default function ProfilePicture(props: ProfilePictureProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [picture, setPicture] = useState(props.picture);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type.startsWith("image")) {
      convertFileToBase64(file, (imageSrc: string) => {
        setPicture(imageSrc);
        props.onEditProfilePicture(imageSrc);
      });
    }
  };

  return (
    <div className="bg-zinc-200 p-6 flex justify-between items-center text-center rounded">
      <h1 className="text-zinc-600 text-left">{props.label}</h1>
      <form>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />
        <img
          src={picture}
          alt={props.name}
          className="w-44 h-44 rounded cursor-pointer hover:opacity-90 overflow-hidden"
          onClick={handleImageClick}
        />
      </form>
    </div>
  );
}
