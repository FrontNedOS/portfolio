import {ChakraProvider} from '@chakra-ui/react'
import type {AppProps} from "next/app";
import {FC, PropsWithChildren} from "react";
import {EmotionCache} from "@emotion/utils";
import {CacheProvider} from '@emotion/react';
import createEmotionCache from "../../common/utils/createEmotionCache";
import Head from "next/head";
import theme from "../../common/theme";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache: EmotionCache = createEmotionCache();

const MyApp: FC<MyAppProps> = (props: PropsWithChildren<MyAppProps>) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <ChakraProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default MyApp