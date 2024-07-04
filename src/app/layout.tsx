import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokemon",
  description: "포켓몬 도감 웹 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full h-[60px] bg-translucent-green text-center pt-[1rem] glow glow-hover">
          <h2 className="font-bold">SUPER 귀여운 포켓몬 도감</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
