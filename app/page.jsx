import Header from './components/Header'
import Rooms from './components/sections/Rooms'
import RoomsSecond from './components/sections/RoomsSecond'
import HeroCarousel from './components/sections/HeroCarousel'
import Outdoor from './components/sections/Outdoor'
import HeroImg from './components/sections/HeroImg'
import Contact from './components/sections/Contact'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Rooms />
				<RoomsSecond />
				<HeroCarousel />
				<Outdoor/>
				<HeroImg/>
			
				<Contact/>
			</main>
		</>
	)
}
