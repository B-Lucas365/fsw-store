"use client";
import styled from "styled-components";
import { Carousel as CarouselMantine } from "@mantine/carousel";

export const Carousel = styled(CarouselMantine)`
  cursor: grab;
  
  .mantine-Carousel-slide {
      margin-right: -25px;
  }
`;
