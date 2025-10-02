import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import localFont from "next/font/local";
import { SecurityGuard } from "@/components/SecurityGuard";

const rubik = localFont({
  src: "./font/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});

const souvenir = localFont({
  src: [
    {
      path: "./font/SouvenirB.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-souvenir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TiktokShop",
  description: "Ganhei dinheiro com TiktokShop",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  // appleWebApp: {
  //   capable: true,
  //   statusBarStyle: "default",
  //   title: "TikTok Shop",
  // },
  // manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="manifest" href="/manifest.webmanifest" /> */}
        <link rel="icon" href="/favicon.ico" />
        {/* VSL - PRESELL */}
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6847ccaae73418f1e62260dc/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6847cca0893256765f5d3f1c/main.m3u8" as="fetch" />
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4a36ea118875f811527/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6854d3897167387c11186ac0/main.m3u8" as="fetch" />
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/6854e4f1f3276079e45b98af/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/6854e4bdf3276079e45b985a/main.m3u8" as="fetch" />
        <link rel="preload" href="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/68a78b1073788fd7d229ae54/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/68a78b1073788fd7d229ae54/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/68a78ab473788fd7d229adfd/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        {/* Android Web App Meta Tags */}
        {/* <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="TikTok Shop" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" sizes="192x192" href="/android-chrome-192x192" />
        <link rel="icon" sizes="512x512" href="/android-chrome-512x512" />
        <meta name="apple-mobile-web-app-title" content="TikTok Shop" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-startup-image" href="/apple-touch-icon.png" />
        {Array.from({ length: 15 }, (_, i) => (
          <link key={i} rel="prefetch" href={`/assets/${i + 1}.jpg`} />
        ))} */}
      </Head>
      <body
        className={`${rubik.className} ${souvenir.variable} antialiased`}
      >
        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1326022142455298');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1326022142455298&ev=PageView&noscript=1" />
        </noscript>
        <SecurityGuard>
          {children}
        </SecurityGuard>
      </body>
    </html>
  );
}
