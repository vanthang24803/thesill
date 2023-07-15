import "./globals.css";

import { Lora } from "next/font/google";
import dynamic from "next/dynamic";


import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import getCurrentUser from "@/actions/getCurrentUser";

const font = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "The Sill ",
  description: "Buy a flower every day to make life more beautiful. 😊",
};

const ModalProvider = dynamic(() => import("@/providers/modal-providers"));

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        <ToastProvider />
        <ModalProvider currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
