import Carousel from "@/features/Carousel";
import { googleDriveImage } from "@/helpers/googleToolHelper";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Gallery() {
  return (
    <section id="about" className="relative min-h-52 py-28 px-6">
      <div className="mx-auto max-w-screen-xl flex flex-col justify-center space-y-8">
        <Fade direction="up" duration={1200} triggerOnce>
          <h2 className="text-3xl font-bold text-center">
            Kegiatan Terbaru Bakti Sosial Yayasan Padepokan Fatwa Kehidupan
          </h2>
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
          <Carousel
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
          />
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
        </Fade>
      </div>
    </section>
  );
}

export default Gallery;
