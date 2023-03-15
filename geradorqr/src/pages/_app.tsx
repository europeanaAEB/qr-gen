import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Gerador QR</title>
        <meta name="description" content="Gerador de codigo QR gratuito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qrgen.svg " />
      </Head>
      <NavBar />
  
      <Component {...pageProps} />
    </div>
  );
}
