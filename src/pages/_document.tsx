import { Head, Html, Main, NextScript } from "next/document";

const metaTitle = "Quack AI - Your companion for developer onboarding";
const metaDescription =
  "Quack AI is your companion for developer onboarding. Simplify the onboarding process and improve productivity.";
const metaUrl = "https://www.quack-ai.com/";
const metaBanner = "https://www.quack-ai.com/social-banner.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={metaUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="cZlvGhOOJwuH6S4PfF1JE1OBtMXHebL-P2RLsYn__OY"
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaBanner} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content={metaBanner} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaBanner} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
