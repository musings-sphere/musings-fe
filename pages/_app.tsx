import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";

import "react-lazy-load-image-component/src/effects/opacity.css";
import "leaflet/dist/leaflet.css";
import "assets/css/index.css";
import "assets/css/fonts.css";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: MyAppProps): JSX.Element {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>musings</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<Component {...pageProps} />
		</CacheProvider>
	);
}
