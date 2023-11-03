"use client";
import styled from "styled-components";

import { Card as CardMantine } from "@mantine/core";
import { Flex as FlexMantine } from "@mantine/core";

export const Card = styled(CardMantine)`
  background: var(--black2);
  display: flex;
  flex-direction: column;

  max-width: 156px;

  .mantine-Card-section {
    display: flex;
    height: 170px;
    width: 156px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    .image {
      object-fit: contain;
      height: auto;
      max-height: 70%;
      width: auto;
      max-width: 80%;
    }
  }
`;

export const Flex = styled(FlexMantine)`
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
