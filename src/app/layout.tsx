import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "STEAMLAND FLYING CITY",
  description:
    "Behold, behold! Feast your eyes upon this captivating image of our glorious flying city, soaring through the skies with boundless ambition. And look out fams, because we have countless adventures waiting for us in this world of possibilities. Together, let us begin to tread the uncharted path of joy and friendship, weaving memories that will be forever etched in the tapestry of our lives. Are you ready, dear fam, to embrace the exhilarating odyssey that awaits us?",
  applicationName: "STEAMLAND",
  keywords: ["NFT", "Steamland", "Solana", "SteamlandNFT"],
  authors: [{ name: "Vent Labs" }],
  creator: "Vent Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <body>
          <link rel="icon" href="/assets/icon/Airdrop.png" sizes="any" />

          <header>
            <Header />
          </header>
          <main> {children} </main>
        </body>
      </Suspense>
    </html>
  );
}
