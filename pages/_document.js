import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            property="og:image:secure"
            content="https://super-stipendium.de/img/Webentwickler_Duesseldorf.webp"
          />
          <meta
            property="og:image"
            content="http://super-stipendium.de/img/Webentwickler_Duesseldorf.webp"
          />
          <meta property="og:url" content="https://super-stipendium.de/" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:title"
            content="super-stipendium.de - Digitale Bildung für Alle!"
          />
          <meta
            property="og:description"
            content="Das SuperStipendium ist deine Chance auf einen Karrierestart als Programmiererin! Bewirb dich noch heute!"
          />
          <title>Super-Stipendium</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-479170159"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'AW-479170159', {
                page_path: window.location.pathname,
              });
            gtag('event', 'conversion', {
                'send_to': 'AW-479170159/Zf_RCLDs3PMBEO-cvuQB'
                // 'event_callback': callback
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
