import Hero from "../components/Hero";
import TypingTest from "../components/TypingTest";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <Hero />
      <TypingTest />
    </main>
  );
}