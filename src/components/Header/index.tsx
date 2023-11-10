"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Buttons,
  HamburgerMenu,
  HeaderContainer,
  Shopping,
  Typography,
} from "./styles";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { DrawerComponent } from "../Drawer";
import Link from "next/link";

export const Header = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <HeaderContainer>
      <HamburgerMenu className={opened ? "open" : "close"}>
        <Buttons.Button onClick={open} bg={"transparent"}>
          <RxHamburgerMenu />
        </Buttons.Button>
      </HamburgerMenu>

      <Link href={"/"}>
        <Typography.Title order={4} className="title-pointer">
          <Typography.Text
            span={true}
            variant="gradient"
            gradient={{ from: "#5033C3", to: "#8162FF" }}
          >
            FSW
          </Typography.Text>
          Store
        </Typography.Title>
      </Link>

      <Shopping>
        <Buttons.Button bg={"transparent"}>
          <PiShoppingCart />
        </Buttons.Button>
      </Shopping>

      <DrawerComponent opened={opened} close={close} />
    </HeaderContainer>
  );
};
