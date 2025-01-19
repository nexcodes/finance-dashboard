import Header from "./_components/header";
import Hero from "./_components/hero";
import Features from "./_components/features";
import Screenshots from "./_components/screenshot";
import Stats from "./_components/stats";
import Testimonials from "./_components/testimonials";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto  w-full">
      <div className="absolute top-0 z-[-2] h-screen w-full" />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Screenshots />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
