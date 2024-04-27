import Carousel, { TSendItems } from "@/features/Carousel";
import { googleDriveImage } from "@/helpers/googleToolHelper";
import { Fade } from "react-awesome-reveal";

const itemLink: TSendItems[] = [
  {
    type: "image",
    src: googleDriveImage(
      "https://drive.google.com/file/d/14StlZD7jG361mXfHfPJaafgn5mfw8saI/view?usp=sharing",
      "w1080"
    ),
    altText: "Bakso Yayasan Padepokan Fatwa Kehidupan tahun 2023 1",
  },
  {
    type: "image",
    src: googleDriveImage(
      "https://drive.google.com/file/d/1fTVprGkUXPH9yx4t6Nq_13Xmms_ZRYVG/view?usp=sharing",
      "w1080"
    ),
    altText: "Bakso Yayasan Padepokan Fatwa Kehidupan tahun 2023 2",
  },
  {
    type: "image",
    src: googleDriveImage(
      "https://drive.google.com/file/d/1XObYOiSNZwEnnc2wO9jVrsa48jGBw-Ad/view?usp=sharing",
      "w1080"
    ),
    altText: "Bakso Yayasan Padepokan Fatwa Kehidupan tahun 2023 3",
  },
  {
    type: "image",
    src: googleDriveImage(
      "https://drive.google.com/file/d/1hOUD8NTokpoVSD5PEbBmcj-oR_Zlh3SR/view?usp=sharing",
      "w1080"
    ),
    altText: "Bakso Yayasan Padepokan Fatwa Kehidupan tahun 2023 4",
  },
];

function Gallery() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-screen-xl flex flex-col justify-center space-y-8">
        <Fade direction="up" duration={1200} triggerOnce>
          <h2 className="text-3xl font-bold text-center">
            Kegiatan Terbaru Bakti Sosial Yayasan Padepokan Fatwa Kehidupan
          </h2>
        </Fade>
        <Fade direction="up" duration={1200} triggerOnce className="gallery">
          <Carousel
            sendItems={itemLink}
            optionCarousel={{
              infinite: true,
            }}
            enabledThumbs
          />
        </Fade>
        {/* <iframe
            //   width="560"
            //   height="315"
            src="https://www.youtube.com/embed/Ddxhc-q-dgY?si=qS9VqfjWR2PD_XyS&amp;controls=0"
            title="YouTube video player"
            //   frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            //   allowfullscreen
            className="w-full aspect-video rounded-lg"
          ></iframe> */}

        {/* <Image
            src={googleDriveImage(
              "https://drive.google.com/file/d/14StlZD7jG361mXfHfPJaafgn5mfw8saI/view?usp=sharing",
              "w1080"
            )}
            width={1080}
            height={1080}
            objectFit="cover"
            className="w-full rounded-lg "
            alt="Baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
          /> */}
        {/* <Carousel
            carouselId="gallery-carousel"
            classNameForImage="animate__animated animate__fadeIn animate__slow"
            imgs={[
              {
                src: googleDriveImage(
                  "https://drive.google.com/file/d/14StlZD7jG361mXfHfPJaafgn5mfw8saI/view?usp=sharing",
                  "w1080"
                ),
              },
              {
                src: googleDriveImage(
                  "https://drive.google.com/file/d/1fTVprGkUXPH9yx4t6Nq_13Xmms_ZRYVG/view?usp=sharing",
                  "w1080"
                ),
              },
            ]}
          /> */}
        {/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image
                src={googleDriveImage(
                  "https://drive.google.com/file/d/14StlZD7jG361mXfHfPJaafgn5mfw8saI/view?usp=sharing",
                  "w1080"
                )}
                width={1080}
                height={1080}
                objectFit="cover"
                className="w-full"
                alt="Baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image
                src={googleDriveImage(
                  "https://drive.google.com/file/d/1fTVprGkUXPH9yx4t6Nq_13Xmms_ZRYVG/view?usp=sharing",
                  "w1080"
                )}
                width={1080}
                height={1080}
                objectFit="cover"
                className="w-full"
                alt="Baksos Yayasan Fatwa Kehidupan Sub Majelis Wilayah Ogan Komering Ulu"
              />
            </div>
          </div>
          <div className="flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div> */}
      </div>
    </section>
  );
}

export default Gallery;
