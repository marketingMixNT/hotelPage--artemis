import { Inconsolata, Open_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inconsolata = Inconsolata({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Chatka pod Jodłami',
	description:
		'Chatka pod Jodłami - urokliwy domek w sercu gór, idealny na spokojny odpoczynek wśród majestatycznych jodeł. Zapraszamy na niezapomniane wakacje!',
	
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={inconsolata.className}>
				{children}

				<Footer />
			</body>
		</html>
	)
}
