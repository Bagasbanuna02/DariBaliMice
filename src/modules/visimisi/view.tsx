"use client";
import { Warna } from "@/app/lib/Warna";
import {
  Box,
  Center,
  Grid,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

export default function VisiMisi() {
  return (
    <>
      <Box>
        <Center pb={{ sm: 20, md: 30, base: 10 }}>
          <Text
            color={Warna.hijau}
            fw={"bold"}
            fz={{ sm: 35, md: 40, base: 30 }}
          >
            Visi & Misi
          </Text>
        </Center>

        <SimpleGrid
          cols={2}
          spacing="xl"
          breakpoints={[
            { maxWidth: "62rem", cols: 1, spacing: "md" },
            { maxWidth: "48rem", cols: 1, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "xs" },
          ]}
        >
          <Box>
            <Center pb={"xs"}>
              <Title order={3} color={Warna.hijau}>
                Visi
              </Title>
            </Center>
            <Paper
              p={"xl"}
              sx={{
                borderTop: `3px solid ${Warna.orange}`,
                borderLeft: " 3px solid red",
                
              }}
            >
              <Text fz={"md"} fw={"bold"}>
                Menjadikan DARI BALI MICE sebagai benchmark , ide dan manajemen
                dari sebuah acara yang diadakan, baik dalam hal penyajian maupun
                eksekusi acara
              </Text>
            </Paper>
          </Box>
          <Box>
            <Center pb={"xs"}>
              <Title order={3} color={Warna.hijau}>
                Misi
              </Title>
            </Center>
            <Paper
              p={"xl"}
              sx={{
                borderBottom: `3px solid ${Warna.orange}`,
                borderRight: " 3px solid red",
              }}
            >
              <Text fz={"md"} fw={"bold"}>
                Mendengarkan, mengerti dan memahami keinginan klien untuk
                Bersama - sama mewujudkannya ke delam bidang konsep
              </Text>
            </Paper>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
