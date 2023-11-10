"use client";
import styled from "styled-components";
import { Group as GroupMantine, Badge as BadgeMantine } from "@mantine/core";

export const Container = styled.div`
    padding: 1.5rem;
`

export const Group = styled(GroupMantine)`
   
`

export const Badge = styled(BadgeMantine)`
    padding: 1rem;
    font-size: small;
    color: var(--white);
    margin-bottom: 1rem ;
`
