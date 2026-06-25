import "./globals.css";
import MouseGlow from "./components/mouse-glow";
import { Inter } from "next/font/google";


export const metadata = {
  title: "Ekinexpo | Fuar Stand & İç Mimarlık",
  description: "Anahtar teslim fuar stand ve iç mimarlık çözümleri",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-white text-black overflow-x-hidden`}>
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}