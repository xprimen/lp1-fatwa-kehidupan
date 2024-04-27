"use client";
import Image from "next/image";
import React, { useState } from "react";
import AliceCarousel, {
  Props as AliceCarouselProps,
  EventObject,
} from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carouselAdd.css";

export type TSendItems = {
  type: "link" | "image" | "video";
  src: string;
  classWrapper?: string;
  classImage?: string;
  altText?: string;
};

const thumbItems = (
  items: TSendItems[],
  [setThumbIndex, setThumbAnimation]: [
    React.Dispatch<React.SetStateAction<number>>,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
) => {
  return items.map((item, i) => (
    <div
      key={i}
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      className={item.classWrapper && item.classWrapper}
    >
      <Image
        src={item.src}
        // width={1080}
        // height={1080}
        fill
        objectFit="cover"
        // data-value={1}
        objectPosition="center"
        className={item.classImage && item.classImage}
        alt={item.altText || ""}
      />
    </div>
  ));
};

const itemsGenerate = (items: TSendItems[]): React.ReactNode[] => {
  return items.map((item, i) => (
    <div key={i} className={item.classWrapper && item.classWrapper}>
      <Image
        src={item.src}
        // width={1080}
        // height={1080}
        fill
        objectFit="cover"
        // data-value={1}
        objectPosition="center"
        className={item.classImage && item.classImage}
        alt={item.altText || ""}
      />
    </div>
  ));
};

type Props = {
  sendItems: TSendItems[];
  optionCarousel?: AliceCarouselProps;
  optionCarouselThumbs?: AliceCarouselProps;
  enabledThumbs?: boolean;
  thumbContainerClass?: string;
  // children?: React.ReactNode;
};

const Carousel = ({
  sendItems,
  optionCarousel,
  optionCarouselThumbs,
  enabledThumbs = false,
  thumbContainerClass,
}: Props) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [items] = useState<React.ReactNode[]>(itemsGenerate(sendItems));
  const [thumbs] = useState<React.ReactNode[]>(
    thumbItems(sendItems, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    // console.log("slideNext");
    // console.log(thumbAnimation);
    // console.log(thumbIndex);
    // console.log(thumbs.length);
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    // console.log("slidePrev");
    // console.log(thumbAnimation);
    // console.log(thumbIndex);
    // console.log(thumbs.length);
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e: EventObject) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e: EventObject) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e: EventObject) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return [
    <AliceCarousel
      key={"images"}
      activeIndex={mainIndex}
      animationType="fadeout"
      autoPlayStrategy="action"
      // autoPlay
      disableDotsControls
      disableButtonsControls
      infinite
      items={items}
      // mouseTracking={!thumbAnimation}
      onSlideChange={syncMainBeforeChange}
      onSlideChanged={syncMainAfterChange}
      touchTracking={!thumbAnimation}
      {...optionCarousel}
    />,
    enabledThumbs && (
      <div
        id="carousel-thumbnails"
        className={thumbContainerClass && thumbContainerClass}
        key={"thumbnail"}
      >
        <AliceCarousel
          activeIndex={thumbIndex}
          autoPlay
          autoPlayInterval={5000}
          animationDuration={800}
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          infinite
          mouseTracking={true}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
          responsive={{
            0: { items: 3 },
            768: { items: 4 },
          }}
          {...optionCarouselThumbs}
        />
        <div className="btn-prev" onClick={slidePrev}>
          &lang;
        </div>
        <div className="btn-next" onClick={slideNext}>
          &rang;
        </div>
      </div>
    ),
  ];
  /* return (
    <AliceCarousel
      key={"images"}
      activeIndex={mainIndex}
      animationType="fadeout"
      animationDuration={800}
      // disableDotsControls
      // disableButtonsControls
      items={items || []}
      mouseTracking={!thumbAnimation}
      onSlideChange={syncMainBeforeChange}
      onSlideChanged={syncMainAfterChange}
      touchTracking={!thumbAnimation}
      {...optionCarousel}
    >
      {children}
    </AliceCarousel>
  ); */
};

export default Carousel;
