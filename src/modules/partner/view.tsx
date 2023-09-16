"use client";

import { Warna } from "@/app/lib/Warna";
import { AspectRatio, Box, Group, Image, Paper, Text } from "@mantine/core";

export default function Partner() {
  return (
    <>
      <Box pt={{base: 40, sm: 50}}>
        <Group position="left">
          <Group position="center" w={300}>
            <Box
              bg={Warna.hijau}
              px={"lg"}
              sx={{ borderRadius: ` 15px 15px 0px 0px` }}
            >
              <Text
                color={"white"}
                fw={"bold"}
                fz={{ sm: 35, md: 40, base: 30 }}
              >
                Klien & Mitra
              </Text>
            </Box>
          </Group>
        </Group>
        <Paper
          sx={{
            borderTop: `3px solid ${Warna.hijau}`,
            borderLeft: `3px solid ${Warna.hijau}`,
            borderRight: `3px solid ${Warna.hijau}`,
            borderBottom: `3px solid ${Warna.hijau}`,
          }}
        >
          <AspectRatio ratio={16 / 9}>
            <Image alt="foto" src={"/aset/partner.png"} />
          </AspectRatio>
        </Paper>
      </Box>
    </>
  );
}
