"use client";
import { Group, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, Buttons, Drawer, Navigation } from "./styles";
import { PiPercentLight, PiSignInDuotone } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { RiListOrdered } from "react-icons/ri";
import Link from "next/link";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const DrawerComponent = ({ opened, close }: DrawerProps) => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogOutClick = async () => {
    await signOut();
  };

  return (
    <Drawer
      opened={opened}
      onClose={close}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      size={"60%"}
    >
      <Navigation>
        {status === "authenticated" && data?.user && (
          <Group gap={"sm"}>
            <Avatar src={data.user.image} />
            <Text size="sm">{data.user.name}</Text>
          </Group>
        )}

        {status === "unauthenticated" && (
          <Buttons.Button bg={"transparent"} onClick={handleLoginClick}>
            <PiSignInDuotone /> <Text>Fazer login</Text>
          </Buttons.Button>
        )}

        {status === "authenticated" && (
          <Buttons.Button bg={"transparent"} onClick={handleLogOutClick}>
            <PiSignInDuotone /> <Text size="sm">Fazer logout</Text>
          </Buttons.Button>
        )}

        <Link href={"/"} onClick={close}>
          <Buttons.Button bg={"transparent"}>
            <AiOutlineHome />
            <Text size="sm">Inicio</Text>
          </Buttons.Button>
        </Link>

        <Buttons.Button bg={"transparent"}>
          <PiPercentLight />
          <Text size="sm">Ofertas</Text>
        </Buttons.Button>

        <Link href={"/catalog"} onClick={close}>
          <Buttons.Button bg={"transparent"}>
            <RiListOrdered />
            <Text size="sm">Catálogo</Text>
          </Buttons.Button>
        </Link>
      </Navigation>
    </Drawer>
  );
};
