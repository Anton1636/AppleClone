import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Model'
import * as Sentry from '@sentry/react'
import HowItWork from './components/HowItWork'
import Footer from './components/Footer'

const App = () => {
	return (
		<main className='bg-black'>
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWork />
			<Footer />
		</main>
	)
}

export default App
