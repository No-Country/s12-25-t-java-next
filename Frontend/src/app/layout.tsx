import { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AlaCartApp",
    template: "%s | AlaCartApp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <head />
      <body>
        <div className=" bg-whitebackground">{children}</div>
      </body>
    </html>
  );
}
