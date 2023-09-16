"use client";

import { Warna } from "@/app/lib/Warna";
import {
  AspectRatio,
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  Text,
} from "@mantine/core";

const listGambar = [
  {
    id: 1,
    url: "/aset/service/service1.png",
    title: "BOOTH",
  },
  {
    id: 2,
    url: "/aset/service/service2.png",
    title: "EVENT",
  },
  {
    id: 3,
    url: "/aset/service/service3.png",
    title: "WEDDING PLANNER",
  },
  {
    id: 4,
    url: "/aset/service/service4.png",
    title: "MEETING",
  },
  {
    id: 5,
    url: "/aset/service/service5.png",
    title: "CONFERENCE",
  },
  {
    id: 6,
    url: "/aset/service/service6.png",
    title: "EXIBITION",
  },
];

export default function ViewService() {
  return (
    <>
      <Box pt={{ base: 20, sm: 30 }}>
        <Group position="right">
          <Group position="center" w={400}>
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
                Pelayanan Kami
              </Text>
            </Box>
          </Group>
        </Group>
        <Paper
          p={"lg"}
          sx={{
            borderTop: `3px solid ${Warna.hijau}`,
            borderLeft: `3px solid ${Warna.hijau}`,
            borderRight: `3px solid ${Warna.hijau}`,
            borderBottom: `3px solid ${Warna.hijau}`,
          }}
        >
          <Grid p={"sm"}>
            {listGambar.map((e) => (
              <Grid.Col key={e.id} sm={4} md={6} lg={4} p={"lg"}>
                <AspectRatio ratio={16 / 9} maw={400} mah={400} mx={"auto"}>
                  <Paper radius={"lg"}>
                    <Image alt="foto" src={e.url} />
                  </Paper>
                </AspectRatio>
                <Center  pt={"xs"}>
                  <Badge size="xl" bg={Warna.orange} c={"white"} pb={-10}>{e.title}</Badge>
                </Center>
              </Grid.Col>
            ))}
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
