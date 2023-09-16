import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
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

export default function MyFooter() {
  return (
    <>
      <Box
        bg={"dark"}
        h={{ base: 450, md: 280, lg: 280 }}
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
              <Flex gap={"sm"} align={"center"}>
                <IconBrandGmail size={30} color="white" />
                <Text fw={"bold"} color="white">
                  Daribalimice@gmail.com
                </Text>
              </Flex>
              <Flex gap={"sm"} align={"center"}>
                <IconBrandWhatsapp size={30} color="white" />
                <Text fw={"bold"} color="white">
                  081 xxx xxx xxx
                </Text>
              </Flex>
              <Flex gap={"sm"} align={"center"}>
                <IconBrandInstagram size={30} color="white" />
                <Text fw={"bold"} color="white">
                  @Dari Bali Mice
                </Text>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
        <Box pt={60}>
          {/* <Divider size={0.1} color="white" /> */}
          <Center pt={"xs"} >
            <Text color="white" fw={"lighter"} fz={"xs"}>Website by BanunaStudio  © 2023</Text>
          </Center>
        </Box>
      </Box>
    </>
  );
}
