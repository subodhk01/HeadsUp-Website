import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="We at HeadsUp!, aim to build mental wellness platform for teens and college folks with motto of awareness prior to treatment. We intent to provide psychological help to the people in their relationship, career and connect with the  experts in the field."></meta>
                    <meta name="keywords" content="Headsup, Mental Health, Wellness"></meta>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="icon" href="/favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument