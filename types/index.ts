import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  sale: string;
  isFeatured: boolean;
  find : Find;
  size: Size;
  lights: Light;
  benefit: Benefit;
  color: Color;
  images: Image[];
}

export interface Find {
  id: string;
  name: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  title : string;
  imageUrl: string;
  description : string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Light {
  id: string;
  name: string;
  value: string;
}

export interface Benefit {
  id: string;
  name: string;
  value: string;
}

type Order = PrismaClient["order"];
type OrderItem = PrismaClient["orderItem"];

// Define the ItemData type to store the information of each product in the order
export type ItemData = {
  id: string; // The id of the product
  name: string; // The name of the product
  images: Image[]; // The image of the product
  sale: number; // The sale percentage of the product
  price: string; // The price of the product
  size: Size; // The size of the product
  color: Color; // The color of the product
  quantity: number;
};

// Define the OrderData type to store the information of the order and the products in the order
export type OrderData = {
  firstname: string; // The first name of the user
  lastname: string; // The last name of the user
  email: string; // The email of the user
  address: string; // The address of the user
  numberPhone: string; // The phone number of the user
  company: string; // The company of the user (optional)
  city: string; // The city of the user
  zip: number; // The zip code of the user
  total: number; // The total amount of the order
  items: ItemData[]; // The array of products in the order
};
