import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-DC7DHJRJMP"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-DC7DHJRJMP');
          </script>
          <meta
            name="description"
            content="Situated in Oakland's Joaquin Miller Park, the Oakland Pump Track is now open to the public!"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href={require("../public/images/logo.svg")}
          ></link>
          <link
            href={`https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|EB+Garamond&display=swap`}
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
