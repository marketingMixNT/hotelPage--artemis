import Header from './components/Header'
import Rest from './components/sections/Rest'
import RestSecond from './components/sections/RestSecond'
import HeroCarousel from './components/sections/HeroCarousel'
import RemoteWork from './components/sections/RemoteWork'
import HeroImg from './components/sections/HeroImg'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Rest />
				<RestSecond />
				<HeroCarousel />
				<RemoteWork/>
				<HeroImg/>
				<About/>
				<Contact/>
			</main>
		</>
	)
}
