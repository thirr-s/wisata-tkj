import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Mapshero from "@/components/Mapshero";
export default function Home() {
  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="maps">
        <Mapshero />
      </div>
      <div></div>
      <div id="card">
        <Card />
      </div>
    </div>
  );
}
