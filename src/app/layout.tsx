import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { LayoutProvider } from "../components/LayoutProvider";

import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

const roboto = Roboto({
  weight: ["400", "700"],
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
      <body className={roboto.className}>
        <MantineProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
