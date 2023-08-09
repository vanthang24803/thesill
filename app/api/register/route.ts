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

export async function UPDATE(request: Request) {
  const body = await request.json();
  const { id, image, firstname, lastname, email, numberPhone, address } = body;

  const user = await prisma.user.update({
    where: { id },
    data: {
      image,
      firstname,
      lastname,
      email,
      numberPhone,
      address,
    },
  });

  return NextResponse.json(user);
}
