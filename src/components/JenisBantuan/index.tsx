import {
  mdiAccountCashOutline,
  mdiCash100,
  mdiHandCoin,
  mdiLandslideOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Fade } from "react-awesome-reveal";

function JenisBantuan() {
  return (
    <section id="jenis-bantuan" className="relative py-32 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-screen-xl">
        <Fade direction="up" duration={1000} cascade triggerOnce>
          <div className="card bg-white shadow-lg">
            <div className="card-body items-center space-y-4">
              <Icon path={mdiHandCoin} title="Zakat" size={2} color="primary" />
              <h3 className="text-2xl font-bold">ZAKAT</h3>
              <p className="text-lg/relaxed text-center">
                Tunaikan Zakat Anda, kami yang akan Salurkan dengan Amanah serta
                Terdokumentasi
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-lg">
            <div className="card-body items-center space-y-4">
              <Icon
                path={mdiAccountCashOutline}
                title="INFAQ"
                size={2}
                color="primary"
              />
              <h3 className="text-2xl font-bold">INFAQ</h3>
              <p className="text-lg/relaxed text-center">
                Infaq yang anda kirimkan akan kami salurkan dengan Amanah serta
                Terdokumentasi
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-lg">
            <div className="card-body items-center space-y-4">
              <Icon
                path={mdiCash100}
                title="SEDEKAH"
                size={2}
                color="primary"
              />
              <h3 className="text-2xl font-bold">SEDEKAH</h3>
              <p className="text-lg/relaxed text-center">
                Sedekah Anda Sangat Berarti bagi Saudara-saudara kita yang
                terkena Musibah dan membutuhkan bantuan.
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-lg">
            <div className="card-body items-center space-y-4">
              <Icon
                path={mdiLandslideOutline}
                title="WAKAF"
                size={2}
                color="primary"
              />
              <h3 className="text-2xl font-bold">WAKAF</h3>
              <p className="text-lg/relaxed text-center">
                Harta yang Anda Wakafkan akan digunakan untuk kepentingan dan
                kebermanfaatan untuk Umat
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default JenisBantuan;
