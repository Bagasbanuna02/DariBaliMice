"use client";
import { Carousel } from "@mantine/carousel";
import { AspectRatio, Image } from "@mantine/core";

export default function CarouselHome() {
  return (
    <>
      {/* <Carousel
        maw={"100%"}
        mx="auto"
        slideGap={"lg"}
        withIndicators
        height={700}
        loop
        align={"center"}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
      >
        <Carousel.Slide>
          <Image alt="foto 1" src={"/aset/foto2.jpg"} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image alt="foto 1" src={"/aset/foto1.jpg"} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image alt="foto 1" src={"/aset/foto3.jpg"} />
        </Carousel.Slide>

      </Carousel> */}
      <Carousel
        bg={"blue"}
        slideSize="100%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 10 },
        ]}
      >
        <Carousel.Slide>
          {/* <AspectRatio ratio={10 / 5}>
            <Image alt="foto 1" src={"/aset/foto2.jpg"} />
          </AspectRatio> */}
            <Image alt="foto 1" src={"/aset/foto2.jpg"} />

        </Carousel.Slide>
        <Carousel.Slide>
          <Image alt="foto 1" src={"/aset/foto1.jpg"} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image alt="foto 1" src={"/aset/foto3.jpg"} />
        </Carousel.Slide>
      </Carousel>
    </>
  );
}
