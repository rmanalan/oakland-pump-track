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
          <meta
            name="description"
            content="Situated in Oakland's Joaquin Miller Park, the Oakland Pump Track is now open to the public!"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href={require("../public/images/logo.svg")}
          ></link>
          <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
          <link
            href={`https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|EB+Garamond&display=swap`}
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script>feather.replace();</script>
      </Html>
    );
  }
}

export default MyDocument;
