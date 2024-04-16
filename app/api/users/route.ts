import { PrismaClient, User } from "@prisma/client";
import { prepareProfileDetailsForClient } from "@/app/utils/buffer";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const users: User[] = await prisma.user.findMany({
      include: {
        links: true,
      },
    });
    if (!users) {
      return Response.json({ error: `No users found ` });
    }
    const preparedUsers = users.map((user) =>
      prepareProfileDetailsForClient(user)
    );
    return Response.json({ users: preparedUsers });
  } catch (error) {
    console.error("Failed to find users:", error);
    return Response.json({ error: "Failed to find users" });
  }
}
