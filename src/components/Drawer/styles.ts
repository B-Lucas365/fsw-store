"use client";
import styled from "styled-components";
import { Button, Burger, Drawer as DrawerMantine, Avatar as AvatarMantine} from "@mantine/core";

export const Buttons = {
  Button,
  Burger,
};

export const Drawer = styled(DrawerMantine)`
  color: var(--white);
`

export const Avatar = styled(AvatarMantine)`

`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  svg {
    font-size: 1.2rem;
    margin-right: .5rem;
  }
`;
