import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId as string;

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
    const links = await prisma.link.findMany({
      where: {
        userId: user.id,
      },
    });

    return Response.json({ links });
  } catch (error) {
    console.error("Failed to fetch links:", error);
    return Response.json({ error: "Failed to fetch links" });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId as string;

  const incomingLinks = await request.json();

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
    const existingLinks = await prisma.link.findMany({
      where: {
        userId: user.id,
      },
    });

    const operations = [];

    existingLinks.forEach((existingLink) => {
      if (!incomingLinks.some((link) => link.id === existingLink.id)) {
        operations.push(
          prisma.link.delete({
            where: {
              id: existingLink.id,
            },
          })
        );
      }
    });

    incomingLinks.forEach((link) => {
      if (link.id) {
        operations.push(
          prisma.link.update({
            where: { id: link.id },
            data: { url: link.url, platform: link.platform },
          })
        );
      } else {
        operations.push(
          prisma.link.create({
            data: {
              userId: user.id,
              url: link.url,
              platform: link.platform,
            },
          })
        );
      }
    });

    await prisma.$transaction(operations);

    return Response.json({ message: "Links updated successfully" });
  } catch (error) {
    console.error("Failed to update links:", error);
    return Response.json({ error: "Failed to update links" });
  }
}
