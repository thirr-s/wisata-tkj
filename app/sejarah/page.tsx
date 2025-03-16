import { SejarahTL } from "@/components/SejarahTL";

export default function sejarahPage() {
  return (
    <div className="grid py-10 px-10 mt-5 flex-row ml-10 mr-10">
      <h1 className="text-5xl font-bold">
        Sejarah (Pembangunan dan Penemuan Kembali Candi Prambanan)
      </h1>
      <p className="text-xl md:text-2xl py-5 grid">
        Candi Prambanan adalah bangunan candi bercorak agama Hindu terbesar{" "}
        <br />
        di Indonesia yang dibangun pada abad ke-9 Masehi.
      </p>
      <div>
        <SejarahTL />
      </div>
    </div>
  );
}
