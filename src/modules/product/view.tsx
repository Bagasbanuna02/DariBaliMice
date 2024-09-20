import { Warna } from "@/app/lib/Warna";
import {
  Badge,
  Box,
  Center,
  Divider,
  Grid,
  List,
  Paper,
  Space,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

const listProduk = [
  {
    id: 1,
    name: "PHOTO & VIDEOGRAPHER",
  },
  {
    id: 2,
    name: "MANPOWER",
  },
  {
    id: 3,
    name: "LED SCREEN",
  },
  {
    id: 5,
    name: "SHOW MANAGEMENT TEAM",
  },
  {
    id: 6,
    name: "BOOTH PRODUCTION",
  },
  {
    id: 7,
    name: "SOUND SYSTEM",
  },
  {
    id: 8,
    name: " MULTIMEDIA EQUIPMENT MEETING & CONFERENCE",
  },
];

export default function Product() {
  return (
    <>
      {/* <Space  /> */}
      <Box my={"lg"}>
      <Divider
        color={Warna.hijau}
        size={"xl"}
        my={"sm"}
        mx={"lg"}
        pt={"xl"}
        label={<Title  fz={{ sm: 35, md: 40, base: 30 }}>Produk Kami</Title>}
        labelPosition="center"
      />
      <Center>
        <Grid>
          <Grid.Col>
            <List size={"xl"} withPadding spacing={"lg"}
            icon={
                <ThemeIcon color={Warna.orange} size={24} radius="xl">
                  <IconCircleCheck size="1rem" />
                </ThemeIcon>
              }
            >
              {listProduk.map((e) => (
                <List.Item key={e.id}>
                    <Text fw={"bold"}>{e.name}</Text>
                </List.Item>
              ))}
            </List>
          </Grid.Col>
        </Grid>
      </Center>
      </Box>
    </>
  );
}
