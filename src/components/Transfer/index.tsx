import { mdiEarth, mdiGlobeLight, mdiGlobeLightOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const bankList = [
  /* {
    image: "mandiri.png",
    title: "A.N. Yayasan Padepokan Fatwa Kehidupan",
    norek: "165-001-357-999-1",
  }, */
  {
    image: "bri.png",
    title: "A.N. Yayasan Padepokan Fatwa Kehidupan",
    norek: "12080-10000-89565",
  },
  {
    image: "ovo.png",
    title: "A.N. YayasanFK",
    norek: "0895-2664-2820",
  },
  {
    image: "dana.png",
    title: "A.N. Susilawati",
    norek: "0895-2664-2820",
  },
  {
    image: "doku.png",
    title: "A.N. Susilawati",
    norek: "0895-2664-2820",
  },
  {
    image: "gopay.png",
    title: "A.N. Susilawati",
    norek: "0895-2664-2820",
  },
];

function Transfer() {
  const [notifCopy, setNotifCopy] = useState(false);
  const [idCopy, setIdCopy] = useState(0);
  const copyNorek = (norek: string, id?: number) => {
    navigator.clipboard.writeText(norek);
    setNotifCopy(true);
    if (id) setIdCopy(id);
    setTimeout(() => {
      setNotifCopy(false);
      if (id) setIdCopy(0);
    }, 1000);
  };

  return (
    <div id="transfer">
      {/* domestik */}
      <section
        id="transfer-indonesia"
        className="relative bg-slate-100 py-28 px-6"
      >
        <div className="flex mx-auto max-w-screen-xl flex-col-reverse md:flex-row">
          <div className="flex flex-col md:w-1/2 justify-start space-y-4">
            <Fade direction="right" triggerOnce>
              <div className="flex flex-row items-center space-x-2">
                <Image
                  src="/assets/images/indonesia.png"
                  width={560}
                  height={560}
                  objectFit="cover"
                  className="w-8 h-8"
                  alt="Bendera Indonesia"
                />
                <span className="text-primary font-bold">Indonesia</span>
              </div>
              <h2 className="text-3xl font-bold">Baksos dan Ziswaf</h2>
              <p className="text-lg/relaxed">
                Salurkan Bantuan Anda untuk Membantu Saudara-saudara kita yang
                membutuhkan bantuan dan mengalami Bencana di Indonesia. Untuk
                berbagi, silahkan kirim ke nomor Rekening Mandiri{" "}
                <strong>165-001-357-999-1</strong>{" "}
                <button
                  onClick={() => copyNorek("1650013579991")}
                  className={`btn ${
                    notifCopy ? "btn-success" : "btn-warning"
                  } btn-sm rounded-md`}
                >
                  {notifCopy ? "Disalin" : "Salin"}
                </button>{" "}
                A.N. <strong>Yayasan Padepokan Fatwa Kehidupan</strong> dengan
                cara:
              </p>
              <ul className="text-lg/relaxed list-outside list-disc pl-6">
                <li>
                  Untuk Wakaf harap menambahkan angka <strong>999</strong> di
                  akhir nilai transfer (cth:{" "}
                  <span className="tabular-nums">Rp100.999</span>).
                </li>
                <li>
                  Untuk Baksos harap menambahkan Nomor Baksos Anda di akhir
                  nilai transfer (cth:{" "}
                  <span className="tabular-nums">Rp100.101</span>, misalkan
                  nomor baksos Anda 101).
                </li>
              </ul>
              <p className="text-lg/relaxed">
                Untuk Konfirmasi transfer dapat menghubungi ke Kusuma Wardhani
                di nomor <span className="tabular-nums">0877-7057-9888</span>
              </p>
            </Fade>
          </div>
          <div className="flex flex-1 items-center justify-center md:justify-start relative">
            <Fade triggerOnce>
              <Image
                src="/assets/images/herobg.jpg"
                width={1024}
                height={1024}
                objectFit="cover"
                className="w-full h-fit mask mask-squircle"
                alt="baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
            </Fade>
          </div>
        </div>
      </section>
      {/* international */}
      <section
        id="transfer-domestik"
        className="relative bg-gray-700 text-white py-28 px-6 space-y-12"
      >
        <div className="flex mx-auto max-w-screen-xl items-center flex-col md:flex-row">
          <div className="flex flex-1 justify-center md:justify-end relative">
            <Fade triggerOnce>
              <Image
                src="/assets/images/palestine/1.jpg"
                width={1024}
                height={1024}
                objectFit="cover"
                className="w-full h-fit mask mask-circle"
                alt="baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
              <Image
                src="/assets/images/palestine/2.jpg"
                width={581}
                height={581}
                objectFit="cover"
                className="w-2/4 h-fit mask mask-circle absolute right-0 -top-16"
                alt="baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
              <Image
                src="/assets/images/palestine/3.jpg"
                width={581}
                height={581}
                objectFit="cover"
                className="w-2/5 h-fit mask mask-circle absolute left-10 -bottom-8"
                alt="baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
            </Fade>
          </div>
          <div className="flex flex-col md:w-1/2 justify-start space-y-4">
            <Fade direction="right" triggerOnce>
              <div className="flex flex-row items-center space-x-2">
                <Icon
                  path={mdiEarth}
                  title="International"
                  size={1}
                  className="!w-8 !h-8"
                />
                <span className="font-bold">Global</span>
              </div>
              <h2 className="text-3xl font-bold">Free Palestine</h2>
              <p className="text-lg/relaxed">
                Sejak November 2023 sampai dengan sekarang kami terus mengirim
                bantuan ke Palestina baik berupa makanan, air bersih,
                obat-obatan, susu, dll. Alhamdulillah Yayasan Padepokan Fatwa
                Kehidupan dimudahkanNya untuk bisa menembus blokade zionis dan
                dapat memberikan bantuan langsung ke warga Palestina. Untuk
                Dokumentasi Resmi dapat dilihat di tautan{" "}
                <a
                  className="btn-link text-green-100"
                  href="https://sites.google.com/view/yayasanpdfk/home"
                  target="_blank"
                >
                  Dokumentasi Free Palestine
                </a>
              </p>
              <p className="text-lg/relaxed">
                Salurkan Bantuan Anda di bawah ini dengan cara menambahkan angka{" "}
                <strong className="tabular-nums">888</strong> ke angka terakhir
                nilai transfer Anda guna memudahkan kami memisahkan bantuan ke
                Palestina.
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex mx-auto max-w-screen-xl flex-col md:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Fade cascade triggerOnce>
              {bankList.map((d, i) => (
                <div
                  key={i.toString()}
                  className={`rounded-lg h-full flex items-center flex-col px-4 py-4 gap-4 border`}
                >
                  <div className="flex justify-center items-center flex-1">
                    <Image
                      src={"/assets/images/payment/" + d.image}
                      width={500}
                      height={500}
                      alt={d.image.replace(".png", "")}
                      className="max-h-24 w-full rounded-lg bg-green-100 p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full text-center gap-2">
                    <h3 className="text-xl font-bold">{d.title} :</h3>
                    <p className="font-bold text-copy">{d.norek}</p>
                  </div>
                  <button
                    className={`btn ${
                      notifCopy && i === idCopy ? "btn-success" : "btn-warning"
                    } btn-md text-lg`}
                    onClick={() => copyNorek(d.norek.replaceAll("-", ""), i)}
                  >
                    {notifCopy && i === idCopy ? "Disalin" : "Salin"}
                  </button>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );

  /* return (
    <section
      id="transfer"
      className="relative bg-slate-100 min-h-52 py-28 px-6"
    >
      <h2 className="text-3xl font-bold mx-auto max-w-screen-xl mb-16">
        Salurkan Langsung Bantuan Anda ke Nomor Rekening Di Bawah !
      </h2>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <Fade triggerOnce duration={1200}>
          {bankList.map((d, i) => (
            <div
              key={i.toString()}
              className={`rounded-lg flex items-center flex-col px-8 py-4 gap-4 shadow-md`}
            >
              <div className="flex justify-center items-center flex-1">
                <Image
                  src={"/assets/images/payment/" + d.image}
                  width={500}
                  height={500}
                  alt={d.image.replace(".png", "")}
                  className="max-h-24 w-full"
                />
              </div>
              <div className="flex flex-col w-full text-center gap-2">
                <h3 className="text-xl font-bold">{d.title} :</h3>
                <p className="font-bold text-copy">{d.norek}</p>
                <button
                  className={`btn ${
                    notifCopy && i === idCopy ? "btn-success" : "btn-warning"
                  } btn-sm`}
                  onClick={() => copyNorek(d.norek.replaceAll("-", ""), i)}
                >
                  {notifCopy && i === idCopy ? "Berhasil Disalin" : "Salin"}
                </button>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  ); */
}

export default Transfer;
