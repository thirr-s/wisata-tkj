import Image from "next/image";

export default function Card() {
  return (
    <div className="mt-10 pt-10 flex flex-col items-center justify-center mb-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <Image
            src="/images/card2.jpeg"
            alt="Card-1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gallery 1</h2>
          <p>Foto Candi Prambanan dari bla bla bla bla</p>
        </div>
      </div>
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <Image
            src="/images/Candi2.jpg"
            alt="Card-2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gallery 2</h2>
          <p>Foto Candi Prambanan dari bla bla bla bla</p>
        </div>
      </div>
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <Image
            src="/images/Candi1.jpg"
            alt="Card-3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Gallery 3</h2>
          <p>Foto Candi Prambanan dari bla bla bla bla</p>
        </div>
      </div>
    </div>
  );
}
