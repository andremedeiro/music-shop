import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Epilogue:wght@500;800&display=swap" rel="stylesheet" />                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <body style={{ scrollbarColor: 'red' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}