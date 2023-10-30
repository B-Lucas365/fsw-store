"use client";

import { Buttons, Navigation, SidebarContainer, SidebarHeader } from "./styles";
import { AiOutlineClose } from "react-icons/Ai";
import { PiSignInDuotone } from "react-icons/Pi";
import { PiPercentLight } from "react-icons/Pi";
import { RiListOrdered } from "react-icons/Ri";
import { AiOutlineHome } from "react-icons/Ai";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, Group, Text } from "@mantine/core";
import { Divider } from "@mantine/core";

interface OpennedProps {
  opened: boolean;
  toggled: () => void;
}

export const Sidebar = ({ opened, toggled }: OpennedProps) => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogOutClick = async () => {
    await signOut();
  };

  return (
    <SidebarContainer className={opened ? "open" : "close"}>
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
        <Buttons.Button bg={"transparent"}>
          <AiOutlineHome />
          <Text size="sm">Inicio</Text>
        </Buttons.Button>

        <Buttons.Button bg={"transparent"}>
          <PiPercentLight />
          <Text size="sm">Ofertas</Text>
        </Buttons.Button>

        <Buttons.Button bg={"transparent"}>
          <RiListOrdered />
          <Text size="sm">Catálogo</Text>
        </Buttons.Button>
      </Navigation>

      <Buttons.Button
        className="button-close"
        onClick={toggled}
        bg={"transparent"}
      >
        <AiOutlineClose />
      </Buttons.Button>
    </SidebarContainer>
  );
};
