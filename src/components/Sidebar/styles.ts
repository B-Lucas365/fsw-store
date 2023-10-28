"use client";
import styled from "styled-components";
import { Button, Burger } from "@mantine/core";

export const Buttons = {
  Button,
  Burger,
};


export const SidebarContainer = styled.aside`

  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background-color: #333;
    transition: left 0.3s ease-in-out;
  }

  &.close {
    position: fixed;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100vh;
    background-color: #333;
    transition: left 0.3s ease-in-out;
  }
`;
