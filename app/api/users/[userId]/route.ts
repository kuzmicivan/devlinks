import { PrismaClient, User } from "@prisma/client";
import {
  prepareProfileDetailsForClient,
  preparePictureForPrisma,
} from "@/app/utils/buffer";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId as string;

  if (!userId) {
    return Response.json({ error: "Missing userId." });
  }

  try {
    const user: User = await prisma.user.findFirst({
      where: {
        auth0Id: userId,
      },
    });
    if (!user) {
      return Response.json({ error: `User ${userId} does not exist. ` });
    }
    const preparedUser = prepareProfileDetailsForClient(user);
    return Response.json({ user: preparedUser });
  } catch (error) {
    console.error("Failed to find user:", error);
    return Response.json({ error: "Failed to fetch find" });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId as string;

  const profileDetails = await request.json();

  if (!userId) {
    return Response.json({ error: "Missing userId." });
  }

  const user = await prisma.user.findFirst({
    where: {
      auth0Id: userId,
    },
  });
  if (!user) {
    return Response.json({ error: `User ${userId} does not exist. ` });
  }

  try {
    const updateUserResponse = await prisma.user.update({
      where: { auth0Id: userId },
      data: {
        name: profileDetails.name,
        picture: preparePictureForPrisma(profileDetails.picture),
      },
    });

    return Response.json({ message: "Links updated successfully: ", updateUserResponse });
  } catch (error) {
    console.error("Failed to update links:", error);
    return Response.json({ error: "Failed to update links" });
  }
}
