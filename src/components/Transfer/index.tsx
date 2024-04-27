import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const bankList = [
  {
    image: "mandiri.png",
    title: "A.N. Yayasan Padepokan Fatwa Kehidupan",
    norek: "165-001-357-999-1",
  },
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
  const copyNorek = (norek: string, id: number) => {
    navigator.clipboard.writeText(norek);
    setNotifCopy(true);
    setIdCopy(id);
    setTimeout(() => {
      setNotifCopy(false);
      setIdCopy(0);
    }, 1000);
  };

  return (
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
  );
}

export default Transfer;
