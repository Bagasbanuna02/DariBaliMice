import { Warna } from "@/app/lib/Warna";
import {
  Box,
  Center,
  List,
  Space,
  Text,
  ThemeIcon,
  createStyles,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  text_header: {
    color: "white",
    fontWeight: "bold",
    ":hover": {
      color: Warna.orange,
    },
  },
}));

export default function BigProject() {
  const { classes } = useStyles();
  return (
    <>
      <Box bg={Warna.hijau} mx={-16} pt={"lg"} mt={"lg"}>
        <Center pb={{ sm: 20, md: 30, base: 10 }}>
          <Text color={"white"} fw={"bold"} fz={{ sm: 35, md: 40, base: 30 }}>
            Proyek Besar
          </Text>
        </Center>

        <Center>
          <List
            //    c={"white"}

            p={{ base: "md" }}
            spacing={"md"}
            size={"md"}
            icon={
              <ThemeIcon color={Warna.orange} size={24} radius="xl">
                <IconCircleCheck size="1rem" />
              </ThemeIcon>
            }
          >
            <List.Item className={classes.text_header}>
              The 40th ISO/Copolco Planary Meeting
            </List.Item>
            <List.Item className={classes.text_header}>
              Loyalty Program S-26 Synergy Camp
            </List.Item>
            <List.Item className={classes.text_header}>
              Festifal Omed - Omedan 2020 - 2022
            </List.Item>
            <List.Item className={classes.text_header}>
              Bali Gems Jewelry Fair 2020 di The Trans Hotel
            </List.Item>
            <List.Item className={classes.text_header}>
              Gathering WIKA PORGEM dari Sidoarjo to Bali
            </List.Item>
            <List.Item className={classes.text_header}>
              Meeting DIREKTORAT KELAIKUDARAAN DAN PENGOPRASIAN PESAWAT UDARA di
              The Anvaya
            </List.Item>
            <List.Item className={classes.text_header}>
              Meeting KEMENTRIAN PERHUBUNGAN DIREKTORAT JENDRAL PERHUBUNGAN LAUT
              DIREKTORAT KENAVIGASIAN
            </List.Item>
            <List.Item className={classes.text_header}>
              Employe Gathering BPTD JATIM Surabaya - Bali
            </List.Item>
            <List.Item className={classes.text_header}>
              Meeting Forum Komunikasi Kehumasan Sektor Transportasi Tahun 2023
              KEMENHUB Biro Komunikasi dan Informasi Publik
            </List.Item>
            <List.Item className={classes.text_header}>
              Show Management Perayaan Waisak & Saraswati Bank Indonesia 2023
            </List.Item>
            <List.Item className={classes.text_header}>
              Project Production Booth untuk SUBWAY (FAST FOOD) di acara Jazz
              Festival 2023
            </List.Item>
            <List.Item className={classes.text_header}>
              Project Event BIOFARMA X MIT HACKING MEDICINE 2023 bersama
              Kementrian Kesehantan RI di Discovery Hotel Kartika Plaza Kuta
              Bali
            </List.Item>
            <List.Item className={classes.text_header}>
              Hybrid Meeting Industrial & Employee Relation Conference 2023
              FORUM HUMAN CAPITAL INDONESIA
            </List.Item>
          </List>
        </Center>
      </Box>
    </>
  );
}
