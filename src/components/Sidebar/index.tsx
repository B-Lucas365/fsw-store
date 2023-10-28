"use client";

import { SidebarContainer } from "./styles";

interface OpennedProps {
    opened: boolean
}

export const Sidebar = ({opened}: OpennedProps) => {
  
  return (
    <SidebarContainer className={opened ? 'open' : 'close'}>
      <p>Sidebar</p>
    </SidebarContainer>
  );
};
