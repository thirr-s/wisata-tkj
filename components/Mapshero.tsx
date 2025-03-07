export default function Mapshero() {
  return (
    <div className="hero pt-5 mt-5 md:pt-10 md:mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.355983681506!2d110.48888710963355!3d-7.752015276830242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sCandi%20Prambanan!5e0!3m2!1sid!2sid!4v1741312577863!5m2!1sid!2sid"
          className="w-50 h-60 md:w-[1000px] md:h-[350px] max-w-sm rounded-lg shadow-2xl"
          loading="lazy"
        ></iframe>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Lokasi Candi Prambanan
          </h1>
          <p className="py-5 grid">
            Kompleks percandian Prambanan secara keseluruhan terletak di Daerah
            Istimewa Yogyakarta, tetapi pintu administrasinya terletak di Jawa
            Tengah. Hal ini yang membuat Candi Prambanan terletak di 2 tempat
            yakni di Desa Bokoharjo, Prambanan, Kabupaten Sleman, Daerah
            Istimewa Yogyakarta, dan di Tlogo, Prambanan, Kabupaten Klaten, Jawa
            Tengah, atau kurang lebih 17 kilometer timur laut dari Kota Yogya,
            50 kilometer barat daya dari Kota Surakarta dan 120 kilometer
            selatan dari Kota Semarang, persis di perbatasan antara Daerah
            Istimewa Yogyakarta dan Jawa Tengah.
          </p>
        </div>
      </div>
    </div>
  );
}
