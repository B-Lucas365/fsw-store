"use client";
import styled from "styled-components";
import { Button, Burger } from "@mantine/core";

export const Buttons = {
  Button,
  Burger,
};

interface OpenedProps {
    opened: string
}

export const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid #fff;
  color: #fff;
`;

export const Div = styled.div`
    &.open {
      margin-left: 200px;
      transition: margin-left 0.3s ease-in-out;
    } 

    &.close{
      margin-left: 0px;
      transition: margin-left 0.3s ease-in-out;
    }
    
`
