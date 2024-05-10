import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatka pod Jodłami",
  description: "Chatka pod Jodłami - urokliwy domek w sercu gór, idealny na spokojny odpoczynek wśród majestatycznych jodeł. Zapraszamy na niezapomniane wakacje!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
