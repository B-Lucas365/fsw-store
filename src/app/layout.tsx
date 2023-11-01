import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LayoutProvider } from "../components/LayoutProvider";

import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <MantineProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
