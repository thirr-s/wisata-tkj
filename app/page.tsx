import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Sejarah from "@/components/Sejarah";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="card">
        <Card />
      </div>
      <div id="sejarah">
        <Sejarah />
      </div>
    </div>
  );
}
