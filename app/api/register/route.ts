import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstname, lastname, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
