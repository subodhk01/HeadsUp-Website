import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import '../styles/flickity.css'
import '../styles/font.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Headsup | Mental Health</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
