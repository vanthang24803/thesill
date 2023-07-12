import { User } from "@prisma/client";

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
  size: Size;
  lights: Light;
  benefit: Benefit;
  color: Color;
  images: Image[];
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
