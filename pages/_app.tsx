import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { SWRConfig } from "swr";
import api from "../lib/api/api";
import { GlobalProvider } from "../lib/context/GlobalContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: (resource) => api.get(resource).then((res) => res.data),
        fallback: pageProps?.fallback || {},
      }}
    >
      <GlobalProvider>
        {getLayout(<Component {...pageProps} />)}
        <div id="root-modal"></div>
      </GlobalProvider>
    </SWRConfig>
  );
}

export default MyApp;
