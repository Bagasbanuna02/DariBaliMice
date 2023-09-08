"use client";

import {
  AspectRatio,
  Box,
  Button,
  Center,
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

export default function LandingPage() {
  return (
    <>
      <MyHome />
      <Stack spacing={50}>
        <About />
        <VisiMisi />
      </Stack>
    </>
  );
}

function MyHome() {
  return (
    <>
      <Box  mx={-16} mt={-16} p={{base: "xs", sm: "md"}}>
        <AspectRatio ratio={16 / 12} maw={1000} mx={"auto"}>
          <Image alt="foto 1" src={"/aset/logo1.png"} />
        </AspectRatio>
      </Box>
    </>
  );
}
