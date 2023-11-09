"use client";
import styled from "styled-components";
import { Flex as FlexMantine } from "@mantine/core";

export const Flex = styled(FlexMantine)`
  &.image-container {
    width: 100%;
    height: 9.375rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0px 0px;
    background: linear-gradient(45deg, #5033c3 0%, rgba(80, 51, 195, 0.2) 100%);

    .image {
      height: auto;
      max-height: 70%;
      width: auto;
      max-width: 870%;
      object-fit: contain;
    }
  }

  &.name-content {
    border-radius: 0px 0px 10px 10px;
    padding:.3rem 0 ;
  }
`;
