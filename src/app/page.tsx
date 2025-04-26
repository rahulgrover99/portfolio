import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-gray-950">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
