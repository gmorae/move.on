import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentProps,
} from "next/document";

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
                    <meta name="author" content="Gabriel Moraes Martins" />
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