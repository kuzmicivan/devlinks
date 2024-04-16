import {
  GetLoginState,
  handleAuth,
  handleCallback,
  Session,
} from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

const downloadImageAsBuffer = async (url: string): Promise<Buffer> => {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });
  return Buffer.from(response.data, "binary");
};

const afterCallback = async (
  req: NextRequest,
  session: Session,
  state: GetLoginState
) => {
  if (session.user && session.user.picture) {
    try {
      const pictureBuffer = await downloadImageAsBuffer(session.user.picture);

      const dbUser = await prisma.user.upsert({
        where: { auth0Id: session.user.sub },
        update: {},
        create: {
          email: session.user.email,
          name: session.user.name,
          auth0Id: session.user.sub,
          picture: pictureBuffer,
        },
      });

      console.log("User record ensured in DB:", dbUser);
    } catch (error) {
      console.error("Error saving user picture:", error);
    }

    return session;
  }
};

export const GET = handleAuth({
  callback: handleCallback({ afterCallback }),
});
