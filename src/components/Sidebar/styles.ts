"use client";
import styled from "styled-components";
import { Button, Burger } from "@mantine/core";

export const Buttons = {
  Button,
  Burger,
};

export const SidebarContainer = styled.aside`
  position: relative;
  z-index: 999;
  background: var(--black-02);
  padding: 1rem;

  .mantine-Button-root {
    svg {
      font-size: 1.4rem;
      margin-right: 0.3rem;
    }
  }

  .button-close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: #fff;

    svg {
      font-size: 1rem;
    }
  }

  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 310px;
    height: 100vh;
    transition: left 0.3s ease-in-out;
  }

  &.close {
    position: fixed;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100vh;
    transition: left 0.3s ease-in-out;
  }
`;

export const SidebarHeader = styled.div``;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: flex-start;
`