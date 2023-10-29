"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Buttons,
  HamburgerMenu,
  HeaderContainer,
  Shopping,
  Typography,
} from "./styles";
import { Sidebar } from "../Sidebar";
import {PiShoppingCart} from 'react-icons/Pi'

export const Header = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <HeaderContainer>
      <Sidebar opened={opened} />

      <HamburgerMenu className={opened ? "open" : "close"}>
        <Buttons.Burger
          opened={opened}
          onClick={toggle}
          color="#fff"
          size={"sm"}
        />
      </HamburgerMenu>

      <Typography.Title order={4}>
        <Typography.Text
          span={true}
          variant="gradient"
          gradient={{ from: "#5033C3", to: "#8162FF" }}
        >
          FSW
        </Typography.Text>{" "}
        Store
      </Typography.Title>

      <Shopping>
        <Buttons.Button bg={"transparent"}>
          <PiShoppingCart />
        </Buttons.Button>
      </Shopping>
    </HeaderContainer>
  );
};
