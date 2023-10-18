import "../styles/styles.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/GoogleAnalytics";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
