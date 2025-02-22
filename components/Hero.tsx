import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero pt-10 mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/images/cani.png"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          alt="Candi"
          style={{ width: "100%", height: "100%" }} // optional
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Candi Prambanan</h1>
          <p className="py-5 grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            molestie quis augue at tincidunt. Ut sed tellus vitae ex efficitur
            ullamcorper fermentum at magna. Ut ac arcu lacinia, luctus tellus
            sit amet, ornare lorem. Quisque in gravida neque. Curabitur
            vestibulum sapien mi, eu accumsan nisi egestas ut. Mauris commodo
            mollis tristique.
          </p>
        </div>
      </div>
    </div>
  );
}
