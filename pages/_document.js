import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <meta
            property="og:image:secure"
            content="https://super-stipendium.de/img/page-preview.png"
          />
          <meta
            property="og:image"
            content="http://super-stipendium.de/img/page-preview.png"
          />
          <meta property="og:url" content="https://super-stipendium.de/" />
          <meta property="og:type" content="Website" />
          <meta
            property="og:title"
            content="super-stipendium.de - Die Chance deine digitale Karriere zu starten"
          />
          <meta
            property="og:description"
            content="Das SuperStipendium ist deine Chance auf einen Karrierestart als Programmierer:in! Bewirb dich noch heute!"
          />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='alternate icon' href='/favicon.ico' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5d3ede" />
          <meta name="theme-color" content="#5d3ede"></meta>
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
