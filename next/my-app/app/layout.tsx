import "./globals.css";
import Providers from "../app/providers";
import Count from "./components/Count";
import Cart from './components/Cart'

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
          <Count />
          <Cart />
        </Providers>
      </body>
    </html>
  );
}
