import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <HeroSection />
    </main>
  );
}
