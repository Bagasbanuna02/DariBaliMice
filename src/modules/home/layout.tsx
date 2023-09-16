"use client";

import { Warna } from "@/app/lib/Warna";
import {
  AppShell,
  Burger,
  Center,
  Drawer,
  Flex,
  Group,
  Header,
  Image,
  MediaQuery,
  Menu,
  NavLink,
  Text,
  Title,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import { IconChevronDown, IconGauge } from "@tabler/icons-react";
import { useState } from "react";
import { useWindowScroll } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  text_header: {
    color: Warna.orange,
    fontWeight: "bold",
    ":hover": {
      color: Warna.merah,
    },
  },
}));

export default function HomeLayout({ children }: { children: any }) {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <AppShell
        header={
          <Header height={{ base: 50, md: 70 }}>
            <Flex h={{ base: 50, md: 70 }}>
              {/* Mobile View */}
              <MediaQuery largerThan="md" styles={{ display: "none" }}>
                <Group position="apart" w={"100%"} px={"xs"}>
                  <Burger
                    size={"sm"}
                    color={Warna.biru}
                    opened={open}
                    onClick={() => setOpen(!open)}
                  />
                  <Image
                    alt="Logo"
                    src={"/aset/logo.png"}
                    height={40}
                    width={40}
                    mr={"xl"}
                  />
                  &nbsp;
                  {/* <div></div> */}
                </Group>
              </MediaQuery>

              {/* Web View */}
              <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                <Group
                  h={{ base: 50, md: 70 }}
                  position="apart"
                  px={"lg"}
                  w={"100%"}
                  bg={scroll.y > 800 ? Warna.hijau : "white"}
                >
                  <Image
                    alt="Logo"
                    src={"/aset/logo.png"}
                    height={50}
                    width={50}
                  />
                  <Group spacing={50}>
                    <UnstyledButton className={classes.text_header} onClick={() => scrollTo({y: 0})}>
                      Home
                    </UnstyledButton>
                    <Menu withArrow>
                      <Menu.Target>
                        <UnstyledButton className={classes.text_header}>
                          <Group spacing={1}>
                            <Text>Tentang Kami</Text> <IconChevronDown />
                          </Group>
                        </UnstyledButton>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item onClick={() => scrollTo({y: 700})}>Kami</Menu.Item>
                        <Menu.Item onClick={() => scrollTo({y: 900})}>Visi & Misi</Menu.Item>
                        <Menu.Item>Klien & Mitra</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <Menu withArrow>
                      <Menu.Target>
                        <UnstyledButton className={classes.text_header}>
                          <Group spacing={1}>
                            <Text>Proyek Kita</Text> <IconChevronDown />
                          </Group>
                        </UnstyledButton>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Proyek Besar</Menu.Item>
                        <Menu.Item>Pelayanan Kami</Menu.Item>
                        <Menu.Item>Produk</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <UnstyledButton className={classes.text_header}>
                     Hubungi Kami
                    </UnstyledButton>
                  </Group>
                </Group>
              </MediaQuery>
            </Flex>
          </Header>
        }
      >
        {children}
      </AppShell>
      <Drawer
        color="red"
        size={"xs"}
        // title={
        //   <Text fz={"xl"} fw={"bold"}>
        //     Dari Bali MICE
        //   </Text>
        // }
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
        opened={open}
        onClose={() => setOpen(false)}
      >
        <NavLink label="Home" onClick={() => scrollTo({y: 0})}/>
        <NavLink label="Tentang Kami">
          <NavLink  label="Kami"  onClick={() => scrollTo({y: 300})}/>
          <NavLink label="Visi & Misi" />
          <NavLink label="Klien & Mitra" />
        </NavLink>
        <NavLink label="Proyek Kami">
          <NavLink label="Proyek Besar" />
          <NavLink label="Pelayanan Kami" />
          <NavLink label="Produk" />
        </NavLink>
        <NavLink label="Hubungi Kami" />
      </Drawer>
      {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Flex pos={"fixed"} top={0} p="lg" bg={"blue"} w={"100%"}>
          <Title>Menu</Title>
        </Flex>
      </MediaQuery> */}
    </>
  );
}
