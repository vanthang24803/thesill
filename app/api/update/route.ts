import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function PATCH(request: Request) {
  const body = await request.json();
  const { id, data } = body;

  // Validate the id and data and handle any errors

  // Update the user in the database using Prisma
  const updatedUser = await prisma.user.update({
    where: {
      id: id, // The id of the user to update
    },
    data: data, // The new data of the user
  });

  return NextResponse.json(updatedUser);
}
