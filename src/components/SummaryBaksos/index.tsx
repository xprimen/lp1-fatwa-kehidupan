import { mdiHandHeart, mdiLandslideOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

function SummaryBaksos() {
  return (
    <section
      id="about"
      className="relative bg-gray-800 min-h-52 py-28 px-6 text-white"
    >
      <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row space-y-24 md:space-y-0">
        <div className="flex md:flex-1 flex-col items-start space-y-8">
          <Fade cascade duration={1200} triggerOnce direction="left">
            <h2 className="text-5xl font-bold">
              Bakti Sosial Kepada Masyarakat
            </h2>
            <p className="text-lg/relaxed">
              Bakti Sosial dilakukan sejak Tahun 2017 sampai dengan Sekarang
              kepada masyarakat yang membutuhkan, termasuk Korban Bencana Alam
              yang terjadi di Seluruh Wilayah Indonesia.
            </p>
            <div className="flex flex-row items-center space-x-12">
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl/relaxed font-bold">Kegiatan</h3>
                <span className="text-5xl font-bold">138+</span>
              </div>
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl/relaxed font-bold">Disalurkan</h3>
                <span className="text-5xl font-bold">Rp 2,4M+</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="text-white flex items-center w-full justify-center md:w-2/5">
          <Fade duration={1200} triggerOnce direction="up">
            <Icon
              path={mdiHandHeart}
              title="Love"
              size={1}
              className="!w-60 !h-60"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default SummaryBaksos;
