"use client";
import { useState, useEffect } from "react";
import { montserrat } from "./fonts";
import "./globals.css";
import Loader from "@/components/Common/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  
  return (
    <html lang="es" className={`${montserrat.variable}`}>

      <body suppressHydrationWarning={true}>
      <div className=" bg-whitebackground">
      {loading ? (
            <Loader />
          ) : (
            <div>
              {children}

            </div>
          )
          }
      </div>
      </body>
    </html>
  );
}
