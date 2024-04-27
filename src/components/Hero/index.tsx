import { googleDriveImage } from "@/helpers/googleToolHelper";
import BearCarousel, {
  BearSlideCard,
  IBearSlideItemData,
  TMoveEffectFn,
} from "bear-react-carousel";
import Image from "next/image";
import { useCallback } from "react";
import { Fade } from "react-awesome-reveal";

const slideItems = [
  {
    id: 1,
    imageUrl: googleDriveImage(
      "https://drive.google.com/file/d/1fTVprGkUXPH9yx4t6Nq_13Xmms_ZRYVG/view?usp=sharing",
      "w768"
    ),
  },
  {
    id: 2,
    imageUrl: googleDriveImage(
      "https://drive.google.com/file/d/14AFnb--FkyW2vOS63BALUrbO2lu1ANcw/view?usp=sharing",
      "w768"
    ),
  },
];

const Hero = () => {
  const slideData = useCallback(() => {
    const bearSlideItemData: IBearSlideItemData[] = slideItems.map((row) => {
      return {
        key: row.id,
        children: (
          <BearSlideCard>
            <Image
              src={row.imageUrl}
              fill
              objectFit="cover"
              objectPosition="center"
              alt={row.id.toString()}
            />
          </BearSlideCard>
        ),
      };
    });
    return bearSlideItemData;
  }, []);

  const mainMoveEffectFn: TMoveEffectFn = useCallback((percentageInfo) => {
    const transformY = 40;
    return {
      transform: `none`,
      animation: "ease-in",
    };
  }, []);

  return (
    <section id="hero" className="relative h-[500px] lg:h-[600px] xl:h-[800px]">
      <BearCarousel
        data={slideData()}
        // height={{ widthRatio: 21, heightRatio: 9 }}
        height="100%"
        // isCenteredSlides
        slidesPerView={1}
        isEnableNavButton={false}
        isEnablePagination={false}
        isEnableLoop
        // isLazy
        isEnableAutoPlay
        className="-z-10"
        renderLazyPreloader={() => (
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/logo.png"
              height={100}
              width={100}
              className="w-16 md:w-24 lg:w-36"
              alt="logo"
            />
          </div>
        )}
        // moveTime={0}
        moveEffect={{
          // moveFn: moveEffectFn.transformY(0),
          moveFn: mainMoveEffectFn,
        }}
      />

      <div className="absolute inset-0 flex justify-center py-16 px-8 items-center bg-black/55 text-white md:bg-transparent md:from-black/75 md:to-black/30 md:bg-gradient-to-r">
        <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-center md:items-start md:gap-20 gap-4 md:px-24">
          <Fade duration={2000} triggerOnce>
            <div className="logo">
              <Image
                src="/assets/images/logo.png"
                height={1080}
                width={1080}
                alt="logo"
                className="bg-white rounded-full p-1 w-20 md:w-48 lg:w-64 xl:w-72 shadow-lg"
              />
            </div>
          </Fade>
          <div className="md:text-left text-center space-y-3">
            <Fade
              direction="left"
              cascade
              duration={1200}
              damping={0.1}
              triggerOnce
            >
              <h1 className="text-3xl font-extrabold sm:text-3xl md:text-4xl xl:text-6xl">
                Yayasan Padepokan Fatwa Kehidupan
                <strong className="block font-extrabold text-green-500">
                  Bersama Kita Bisa
                </strong>
              </h1>
              <p className="text-lg/relaxed">
                Mari kita berbagi untuk saudara-saudara kita yang membutuhkan
                dan terkena musibah
              </p>
              <div className="flex justify-center md:justify-start gap-4 text-center">
                <a
                  href="#about"
                  className="rounded-md btn text-white bg-transparent hover:bg-white hover:text-gray-800 text-lg"
                >
                  Siapa Kita ?
                </a>
                <a
                  href="#transfer"
                  className="rounded bg-green-600 px-12 py-3 text-md font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 animate__delay-1s animate__infinite animate__pulse animate__animated"
                >
                  Berdonasi
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="wave-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
