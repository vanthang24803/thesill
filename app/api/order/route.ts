import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prismadb";
import { ItemData } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstname,
      lastname,
      email,
      address,
      numberPhone,
      company,
      city,
      zip,
      items,
    } = body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !address ||
      !numberPhone ||
      !city ||
      !zip ||
      !items
    ) {
      return NextResponse.json("Something went wrong!");
    }

    // Create a new order document using the Prisma client with the include option
    const order = await prisma.order.create({
      data: {
        firstname,
        lastname,
        email,
        address,
        numberPhone,
        company,
        city,
        zip,
        status: "ordered",
        items: {
          create: items.map((item: ItemData , quantity: number) => ({
            productId: item.id,
            name: item.name,
            image: item.images[0].url,
            sale: item.sale,
            price: item.price,
            size: item.size.name,
            color: item.color.name,
            quantity: quantity, 
            status: "pending",
          })),
        },
      },
      include: {
        items: true, // Include the related records in the OrderItem table
      },
    });

    // Return a JSON response with the order object
    return NextResponse.json(order);
  } catch (errors: any) {
    return NextResponse.json(errors);
  }
}
