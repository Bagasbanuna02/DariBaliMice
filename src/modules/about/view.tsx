"use client";

import { Warna } from "@/app/lib/Warna";
import {
  AspectRatio,
  Box,
  Center,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from "@mantine/core";

const useStyle = createStyles((theme) => ({
  _text: {
    color: "white",
  },
}));

export default function About() {
  const { classes } = useStyle();
  return (
    <>
      <Box
      mx={-16}
        // w={"100"}
        // withBorder
        // sx={{ borderColor: "blue", borderWidth: 10 }}
        p={"lg"}
        bg={Warna.hijau}
       
      >
        <Center pb={{ sm: 30, md: 40, base: 20 }}>
          <Text
            className={classes._text}
            fw={"bold"}
            fz={{ sm: 35, md: 40, base: 30 }}
          >
            About Us
          </Text>
        </Center>

        <SimpleGrid
          pb={"lg"}
          cols={2}
          spacing="xl"
          breakpoints={[
            { maxWidth: "62rem", cols: 1, spacing: "md" },
            { maxWidth: "48rem", cols: 1, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "xs" },
          ]}
        >
          <div>
            <AspectRatio ratio={16 / 9} maw={600} mx={"auto"}>
              <Paper radius={10} >
                <Image alt="foto" src={"/aset/foto2.jpg"} />
              </Paper>
            </AspectRatio>
          </div>
          <div>
            <Box p={"lg"}>
              <Text fz={{ base: 15, md: 20 }} className={classes._text}>
                <Text fw={"bold"} span c={Warna.orange} inherit>
                  DARIBALI MICE
                </Text>{" "}
                adalah sebuah perusahaan yang mengkhususkan diri dalam bidang
                planner MICE (Meeting , Incentives , Conference Exhibtion) dan
                Production Event, selalu lebih dekat dengan kebutuhan pelanggan,
                dengan harga terjangkau harga dan sesuai dengan anggaran
                pelanggan. Kami telah berdiri sejak tahun 2015 dan telah
                berhasil dalam berbagai jenis acara, keduanya secara nasional
                dan internasional. Semua Event dan Produksi DARIBALI MICE juga
                menjalin kerjasama dengan berbagai perusahaan.
              </Text>
            </Box>
          </div>
        </SimpleGrid>
      </Box>
    </>
  );
}
