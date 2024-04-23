import {
  mdiEarth,
  mdiFacebook,
  mdiGlobeLightOutline,
  mdiGlobeModel,
  mdiInstagram,
  mdiYoutube,
} from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <section
      id="about"
      className="relative bg-fixed bg-parallax-about bg-no-repeat bg-center bg-cover min-h-52 py-28 px-6 text-white"
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative mx-auto max-w-screen-xl flex flex-col items-start space-y-8">
        <Fade triggerOnce duration={1200}>
          <h2 className="text-3xl font-bold">
            Mengapa Harus Melalui Yayasan Padepokan Fatwa Kehidupan?
          </h2>
          <p className="text-lg/relaxed">
            Yayasan Padepokan Fatwa Kehidupan Merupakan salah satu lembaga
            Filantropi Islam Indonesia yang menjadi penghubung antara Umat ke
            Umat untuk memberikan solusi atau bantuan terhadap permasalahan
            umat. yang berkomitmen menjadi Lembaga yang terpercaya, progesif,
            dan professional serta dapat berkolaborasi dengan berbagai pihak
            untuk terwujudnya pemberdayaan masyarakat yang lebih baik melalui
            bidang Pendidikan, kesehatan, ekonomi, dan lingkungan.
          </p>
          <p className="text-lg/relaxed">
            Yayasan ini berkomitmen dan mendedikasikan diri dalam bidang
            Keagamaan, Sosial Kemanusiaan, dan Ekonomi Keumatan. Berdiri sejak
            28 April 2014, berdasarkan Akta Notaris Nomor 03 Tanggal 28 April
            2014 oleh Notaris Rachmawati Fitriah, SH berkedudukan di Jakarta
            Barat.
          </p>
          <p className="text-lg/relaxed">
            Semua Donasi yang telah Masuk, Insya Allah akan Kami salurkan 100%
            untuk Masyarakat yang membutuhkan.
          </p>
          <h3 className="text-xl">Kunjungi Kami:</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100093088929824"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              <Icon
                path={mdiFacebook}
                title="Halaman Yayasan Padepokan Fatwa Kehidupan"
                size={1}
              />
              Facebook
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/padepokan_fatwa_kehidupan/"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              <Icon
                path={mdiInstagram}
                title="Instagram Yayasan Padepokan Fatwa Kehidupan"
                size={1}
              />
              Instagram
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@FATWA_KEHIDUPAN"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              <Icon
                path={mdiYoutube}
                title="Chanel Youtube Yayasan Padepokan Fatwa Kehidupan"
                size={1}
              />
              Youtube
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@yayasan_fatwa_kehidupan"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              Tiktok
            </a>
            <a
              target="_blank"
              href="https://yayayasanpdfk.my.id"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              <Icon
                path={mdiEarth}
                title="Website Yayasan Padepokan Fatwa Kehidupan"
                size={1}
              />
              Website
            </a>
            <a
              target="_blank"
              href="https://sites.google.com/view/yayasanpdfk/home"
              className="btn text-white bg-transparent hover:bg-white hover:text-gray-800"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Palestine.png"
                width={30}
                height={30}
                alt="Free Palestine"
              />
              Free Palestine
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
