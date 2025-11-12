import Contact from "./components/contact";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Services from "./components/services";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<Services />
			<Gallery />
			<Pricing />
			<Contact />
			<FAQ />
			<Footer />
		</main>
	);
}
