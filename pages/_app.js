import 'react-multi-carousel/lib/styles.css';
import Router, { useRouter } from 'next/router';
// import withFBQ from "next-fbq";
import withAnalytics from 'next-analytics';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MRLL6RX' });
  }, []);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('922978195346577') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])



  return <Component {...pageProps} />
}

// export default withFBQ("353903998812058", Router)(MyApp);
export default withAnalytics(Router, {
  ga: 'UA-140157887-1',
  fbq: '922978195346577',
})(MyApp);
