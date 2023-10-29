"use client";
import styled from "styled-components";
import { Button, Burger } from "@mantine/core";
import { Title, Text } from '@mantine/core';

export const Buttons = {
  Button,
  Burger,
};

export const Typography = {
  Title,
  Text
}


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
 
  color: #fff;
  padding: 1.8rem;

  h4 {
    font-size: 18px;

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const HamburgerMenu = styled.div`
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding: .2rem;
    display: grid;
    place-items: center;

    &.open {
      margin-left: 175px;
      transition: margin-left 0.3s ease-in-out;
    } 

    &.close{
      margin-left: 0px;
      transition: margin-left 0.3s ease-in-out;
    }
    
`

export const Shopping = styled.div`
  border: 1px solid var(--gray);
  border-radius: 5px;
  
  Button {
    font-size: 1.3rem;
    padding: .5rem ;
  }

`
