import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Pricing from "@/components/pricing";
import Location from "@/components/location";
import Contact from "@/components/contact";
import InstagramSection from "@/components/instagram";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<About />
			<Services />
			<Gallery />
			<Pricing />
			<Location />
			<Contact />
			<InstagramSection />
			<FAQ />
			<Footer />
		</main>
	);
}
