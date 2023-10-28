"use client";
import { useDisclosure } from "@mantine/hooks";
import { Buttons, Div, HeaderContainer } from "./styles";
import { Sidebar } from "../Sidebar";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <HeaderContainer>
      <Sidebar opened={opened} />

      <Div className={opened ? 'open' : 'close'}>
        <Buttons.Burger opened={opened} onClick={toggle} color="#fff" />
      </Div>

      <p>header</p>
    </HeaderContainer>
  );
};
