"use client";
import styled from "styled-components";
import { Card as CardMantine } from "@mantine/core";
import { Flex as FlexMantine } from "@mantine/core";
import { Badge as BadgeMantine } from "@mantine/core";

export const Card = styled(CardMantine)`
  background: var(--black2);
  display: flex;
  flex-direction: column;

  max-width: 156px;
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .mantine-Card-section {
    display: flex;
    height: 170px;
    width: 156px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;

    .image {
      object-fit: contain;
      height: auto;
      max-height: 70%;
      width: auto;
      max-width: 80%;
    }
  }
`;

export const Flex = styled(FlexMantine)``;

export const FlexProductPrice = styled(FlexMantine)`
  .total-price {
    font-weight: 600;
  }

  .base-price {
    text-decoration: line-through;
    opacity: 0.75;
  }
`;

export const Badge = styled(BadgeMantine)`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  background: var(--dark-purple);
  padding: 0 0.8rem;
`;
