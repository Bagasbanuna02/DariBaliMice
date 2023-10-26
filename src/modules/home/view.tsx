"use client";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Footer,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import CarouselHome from "../carousel/carousel";
import { Warna } from "@/app/lib/Warna";
import { redirect } from "next/navigation";
import { About } from "../about";
import { VisiMisi } from "../visimisi";
import { Partner } from "../partner";
import { BigProject } from "../big_project";
import { ViewService } from "../service";
import { Product } from "../product";
import { MyFooter } from "../footer";



export default function LandingPage() {
  return (
    <>
      <MyHome />
      <Stack spacing={50}>
        <About />
        <VisiMisi />
        <Partner />
        <BigProject />
        <ViewService />
        <Product/>
        <MyFooter/>
      </Stack>
    </>
  );
}
function MyHome() {
  return (
    <>
      <Box mx={-16} mt={-16} p={{ base: "xs", sm: "md" }}>
        <AspectRatio ratio={16 / 12} maw={1000} mx={"auto"}>
          <Image alt="foto 1" src={"/aset/logo1.png"} />
        </AspectRatio>
      </Box>
    </>
  )
}
