import { googleDriveImage } from "@/helpers/googleToolHelper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function Greeting() {
  return (
    <section id="greeting" className="relative bg-white py-4 px-8">
      <div className="flex mx-auto max-w-screen-xl flex-col items-center md:flex-row">
        <div className="md:w-1/2 flex justify-center relative">
          <Fade duration={2500} direction="left" triggerOnce>
            <Image
              src="/assets/images/greeting.jpg"
              width={560}
              height={560}
              objectFit="cover"
              className="w-3/4 mask mask-hexagon-2"
              alt="baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
            />
          </Fade>
        </div>
        <div className="flex md:w-1/2 flex-col space-y-8">
          <Fade duration={2500} direction="right" triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold">
              Walau Sedikit, Sangat Berarti Bagi Mereka
            </h2>
            <p className="text-lg/relaxed">
              Mari kita sisihkan sedikit rezeki yang Allah titipkan pada kita
              untuk mereka yang sangat membutuhkan karena sedikit yang kita
              berikan akan sangat berarti bagi mereka dan sedekah juga sebagai
              cara mensucikan harta kita. Orang-orang yang bertakwa menyadari
              bahwa pada harta benda yang mereka miliki sesungguhnya ada hak
              yang mesti dikeluarkan, baik berupa zakat maupun sedekah, untuk
              orang miskin yang meminta bantuan dan orang miskin yang tidak
              mengulurkan tangan untuk meminta kepada orang lain. Seperti yang
              tertulis dalam QS. Adz Dzariyat:19
            </p>
            <p className="flex flex-col">
              <span className="text-right text-2xl">
                وَفِيْٓ اَمْوَالِهِمْ حَقٌّ لِّلسَّاۤىِٕلِ وَالْمَحْرُوْمِ .
                (١٩)
              </span>
              <span className="italic text-justify">
                Pada harta benda mereka ada hak bagi orang miskin yang meminta
                dan yang tidak meminta.
              </span>
            </p>
            <p></p>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
