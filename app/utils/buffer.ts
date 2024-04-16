import { User } from "@prisma/client";

export function toBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  return btoa(
    bytes.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
}

export function toImageSrc(base64: string) {
  return `data:image/png;base64,${base64}`;
}

export const convertFileToBase64 = (
  file: File,
  callback: (base64: string) => void
) => {
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result as ArrayBuffer;
    const base64String = toBase64(arrayBuffer);
    const imageSrc = `data:image/png;base64,${base64String}`;
    callback(imageSrc);
  };
  reader.readAsArrayBuffer(file);
};

export const preparePictureForPrisma = (base64: string) => {
  const base64String = base64.split(",")[1];
  return Buffer.from(base64String, "base64");
};

export const prepareProfileDetailsForClient = (user: User) => {
  return {
    ...user,
    picture: toImageSrc(toBase64(user.picture)),
  };
};
