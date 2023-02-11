import BaseDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends BaseDocument {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        defer
                        data-domain="jsonnull.com"
                        src="https://plausible.io/js/plausible.js"
                    ></script>
                </Head>
                <body className="bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
