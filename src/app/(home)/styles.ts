"use client";
import styled from "styled-components";
import { Flex as FlexMantine, Text as TextMantine } from "@mantine/core";

export const HomeContainer = styled.main`
  padding: 2rem 0;
  .banner {
    width: 100%;
    height: auto;
    padding: 1.35rem 1.35rem 0 1.35rem;
  }
`;

export const Flex = styled(FlexMantine)`

`

export const Text = styled(TextMantine)`
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  padding-left: 1.5rem;
  margin-bottom: .5rem;
`