import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'


const playfairdisplay = Montserrat({ subsets: ['latin'],weight:'300' })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Willa na Wzgórzu',
	description:
		'Willa na Wzgórzu: komfortowe pokoje w Zakopanem, blisko szlaków górskich. Ciesz się spokojem, ogrodem i wygodą, z centrum w zasięgu spaceru.',
	
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			      <GoogleTagManager gtmId="GTM-K3F92V9N" />
				  <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/442951f7164be4a3c2079c1a/script.js" strategy="beforeInteractive"
></Script>

			<body className={playfairdisplay.className}>
				{children}

				<Footer />
			</body>
		</html>
	)
}
