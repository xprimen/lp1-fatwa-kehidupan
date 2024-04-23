"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Iimg = {
  src: string;
};

type IProps = {
  imgs: Iimg[];
  carouselId: string;
  classNameCarousel?: string;
  classNameForImage?: string;
  isAutoPlay?: boolean;
  autoPlayMilliseconds?: number;
};

const goToOtherImage = (href: string, carouselId: string) => {
  const carousel = document.getElementById(carouselId);
  if (carousel) {
    const target = document.querySelector<HTMLDivElement>(href)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });
  }
};

function Carousel({
  imgs,
  carouselId,
  classNameCarousel = "",
  classNameForImage = "",
  isAutoPlay = true,
  autoPlayMilliseconds = 5000,
}: IProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClickBtn = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    i: number
  ) => {
    event.preventDefault();
    const btn = event.currentTarget;
    const href = btn.getAttribute("href")!;
    goToOtherImage(href, carouselId);
    setActiveIndex(i);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const intervalId = setInterval(() => {
        const newActiveIndex =
          activeIndex + 1 === imgs.length ? 0 : activeIndex + 1;
        goToOtherImage(`#XPCarousel_img_${newActiveIndex}`, carouselId);
        setActiveIndex(newActiveIndex);
      }, autoPlayMilliseconds);
      return () => clearInterval(intervalId);
    }
  }, [activeIndex, autoPlayMilliseconds, carouselId, imgs.length, isAutoPlay]);

  return (
    <div className="relative">
      <div
        id={carouselId}
        // className={classNames("carousel", classNameCarousel)}
        className={
          classNameCarousel
            ? classNameCarousel + " carousel w-full"
            : "carousel w-full"
        }
      >
        {imgs.map((img, i) => {
          return (
            <div
              key={`XPCarousel_img_${i}`}
              id={`XPCarousel_img_${i}`}
              //   className={twMerge(
              //     "carousel-item w-full bg-center bg-cover bg-no-repeat",
              //     classNameForImage
              //   )}
              className={
                classNameForImage
                  ? classNameForImage + " carousel-item w-full relative"
                  : "carousel-item w-full relative"
              }
              //   style={{
              //     backgroundImage: `url(${img.src})`,
              //   }}
            >
              <Image
                src={img.src}
                className="w-full"
                width={1080}
                height={1080}
                alt={`tes${i}`}
              />
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center w-full py-2 gap-2  absolute bottom-3">
        {imgs.map((img, i) => {
          return (
            <a
              onClick={(e) => handleClickBtn(e, i)}
              key={`XPCarousel_img_point_${i}`}
              href={`#XPCarousel_img_${i}`}
              //   className={classNames(
              //     activeIndex !== i && " opacity-30",
              //     "btn btn-xs btn-circle"
              //   )}
              className={`${
                activeIndex !== i && "opacity-30 "
              } btn btn-xs btn-circle`}
            ></a>
          );
        })}
      </div> */}
    </div>
  );
}

export default Carousel;
