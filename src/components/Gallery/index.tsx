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
          <iframe
            //   width="560"
            //   height="315"
            src="https://www.youtube.com/embed/Ddxhc-q-dgY?si=qS9VqfjWR2PD_XyS&amp;controls=0"
            title="YouTube video player"
            //   frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            //   allowfullscreen
            className="w-full aspect-video rounded-lg"
          ></iframe>
        </Fade>
      </div>
    </section>
  );
}

export default Gallery;
