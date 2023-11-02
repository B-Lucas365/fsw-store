"use client";
import styled from "styled-components";
import { Flex as FlexContainer } from "@mantine/core";
import { FaRegKeyboard } from "react-icons/Fa";
import { CiDesktopMouse1 } from "react-icons/Ci";
import { FiMonitor, FiSquare } from "react-icons/Fi";
import { CiHeadphones } from "react-icons/Ci";
import { PiSpeakerSimpleNoneLight } from "react-icons/Pi";

//icons
export const KeyboardIcon = styled(FaRegKeyboard)``;
export const MouseIcon = styled(CiDesktopMouse1)``;
export const MonitorIcon = styled(FiMonitor)``;
export const HeadphoneIcon = styled(CiHeadphones)``;
export const MousePadIcon = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid var(--white);
    border-radius: 10px;
`;
export const SpeakersIcon = styled(PiSpeakerSimpleNoneLight)``;

//--------------------------

export const Flex = styled(FlexContainer)`
  border: 1px solid var(--dark-gray);
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  border-radius: 10px;
  padding: 11px 47px;

  svg {
    font-size: 1.5rem;
    color: var(--white);
  }
`;
