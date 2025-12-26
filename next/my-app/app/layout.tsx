import "./globals.css";
import Providers from "../app/providers";

export const metadata = {
  title: "My Shop",
  description: "Next.js Redux Toolkit Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}

        </Providers>
      </body>
    </html>
  );
}
