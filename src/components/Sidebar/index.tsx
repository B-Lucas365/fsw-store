"use client";

import { Buttons, Navigation, SidebarContainer, SidebarHeader } from "./styles";
import { AiOutlineClose } from "react-icons/Ai";
import { PiSignInDuotone} from "react-icons/Pi";
import { PiPercentLight } from "react-icons/Pi";
import {RiListOrdered} from 'react-icons/Ri'
import {AiOutlineHome} from 'react-icons/Ai'

interface OpennedProps {
  opened: boolean;
  toggled: () => void;
}

export const Sidebar = ({ opened, toggled }: OpennedProps) => {
  return (
    <SidebarContainer className={opened ? "open" : "close"}>
      <SidebarHeader>Menu</SidebarHeader>

      <Navigation>
        <Buttons.Button bg={"transparent"} >
          <PiSignInDuotone /> Fazer login
        </Buttons.Button>

        <Buttons.Button bg={"transparent"} >
          <AiOutlineHome/> Inicio
        </Buttons.Button>

        <Buttons.Button bg={"transparent"} >
          <PiPercentLight /> Ofertas
        </Buttons.Button>

        <Buttons.Button bg={"transparent"} >
          <RiListOrdered/> Catálogo
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
