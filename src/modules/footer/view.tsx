import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMoodSmile,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyFooter() {
  const router = useRouter();
  return (
    <>
      <Box
        bg={"dark"}
        h={{ base: 500, md: 300, lg: 300 }}
        mx={-16}
        mb={-16}
        p={"xl"}
      >
        <Grid grow>
          <Grid.Col lg={8} md={8} sm={12} p={"lg"}>
            <Stack>
              <Title color="white">Hubungi Kami</Title>
              <Box>
                <Text color="white">
                  Terimakasih sudah mengunjungi website kami !
                </Text>
                <Text color="white">
                  Jika ada yang bisa kami bantu silahkan hubungi kami pada media
                  sosial berikut !
                </Text>
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col lg={4} md={4} sm={12} p={"lg"}>
            <Stack>
              <Flex align={"center"} mb={"sm"}>
                <IconBrandGmail size={30} color="red" />
                <Space w={10} />
                <Text fw={"bold"} color="white">
                  daribalimice@gmail.com
                </Text>
              </Flex>
              <Flex align={"center"} mb={"sm"}>
                <IconBrandWhatsapp size={30} color="green" />
                <Space w={10} />
                <Text fw={"bold"} color="white">
                  <Link
                    color="white"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    href={
                      "https://wa.me/+6282144032676?text=Hallo , Apa boleh saya minta informasi tentang DariBaliMice?"
                    }
                  >
                    {" "}
                    +6282144032676
                  </Link>
                </Text>
              </Flex>
              <Flex align={"center"} mb={"sm"}>
                <IconBrandInstagram size={30} color="orange" />
                <Space w={10} />
                <Text fw={"bold"} color="white">
                  <Link
                    color="white"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    href={
                      "https://instagram.com/daribalimice?igshid=MzRlODBiNWFlZA=="
                    }
                  >
                    {" "}
                    daribalimice
                  </Link>
                </Text>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
        <Box pt={60}>
          {/* <Divider size={0.1} color="white" /> */}
          <Center pt={"xs"}>
            <Text color="white" fw={"lighter"} fz={"xs"}>
              Website by BanunaStudio © 2023
            </Text>
          </Center>
        </Box>
      </Box>
    </>
  );
}
