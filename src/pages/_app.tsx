import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import { ChatwootWidget } from "../components/ChatwootWidget.tsx";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quack AI - Your companion for software team alignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChatwootWidget />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
