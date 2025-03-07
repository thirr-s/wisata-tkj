import Image from "next/image";

export default function HeroSejarah() {
  return (
    <div className="rounded-lg">
      <div className="hero min-h-screen rounded-xl">
        <Image
          src="/images/heroimg.jpg"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          alt="heroimg"
          style={{ width: "100%", height: "100%" }} // optional
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
