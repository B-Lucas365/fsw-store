"use client";
import styled from "styled-components";
import { Button, Burger } from "@mantine/core";

export const Buttons = {
  Button,
  Burger,
};

export const SidebarContainer = styled.div`

  .mantine-Button-root {
    svg {
      font-size: 1.4rem;
      margin-right: 0.3rem;
    }
  }
`;

export const SidebarHeader = styled.div``;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;
