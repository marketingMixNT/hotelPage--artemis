import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

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
			<body className={playfairdisplay.className}>
				{children}

				<Footer />
			</body>
		</html>
	)
}
