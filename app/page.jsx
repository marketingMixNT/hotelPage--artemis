import Header from './components/Header'
import Rest from './components/sections/Rest'
import RemoteWork from './components/sections/RemoteWork'
import HeroCarousel from './components/sections/HeroCarousel'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Rest />
				<RemoteWork />
				<HeroCarousel />
			</main>
		</>
	)
}
