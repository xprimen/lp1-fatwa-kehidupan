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
              src={googleDriveImage(
                "https://drive.google.com/file/d/1EOrdFidBBVLEeVG6yNAcrmi4E7JzFadB/view?usp=sharing",
                "w1080"
              )}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
              iste modi. Repellendus molestias deleniti vitae atque voluptates
              delectus fugit exercitationem vel. Minima tempora veritatis iste
              sunt laborum voluptas soluta voluptatum?
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
