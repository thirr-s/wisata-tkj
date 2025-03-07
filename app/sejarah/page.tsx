import HeroSejarah from "@/components/HeroSejarah";

export default function sejarahPage() {
  return (
    <div className="grid py-10 px-10 mt-5 flex-row ml-10 mr-10">
      <h1 className="text-5xl font-bold">
        Sejarah (Pembangunan dan Penemuan Kembali Candi Prambanan)
      </h1>
      <HeroSejarah />
      <p className="py-5 grid">
        Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang
        dibangun pada abad ke-9 Masehi. Candi ini didedikasikan untuk Trimurti,
        yaitu Brahma, Wisnu, dan Siwa. Pembangunan candi ini dimulai oleh Raja
        Sanjaya pada tahun 856 Masehi dan selesai pada tahun 907 Masehi. Candi
        ini menjadi salah satu simbol kekayaan dan kekayaan budaya Indonesia.
      </p>
    </div>
  );
}
