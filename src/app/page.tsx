import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";

import { Poppins } from "next/font/google";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-gray-950 ${poppins.className}`}>
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AboutMe />
      </div>
    </main>
  );
}
