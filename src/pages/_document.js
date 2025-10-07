import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Scale your business with smart finance & tax compliance technologies. Stay ahead of your finance management with smart and intuitive e-invoicing, payment and tax compliance infrastructure"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
