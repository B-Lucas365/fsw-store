"use client"
import styled from "styled-components"
import { Container as ContainerMantine } from "@mantine/core" 
import {Badge as BadgeMantine, Flex as FlexMantine} from "@mantine/core"

export const Container = styled(ContainerMantine)`
    padding: 1.5rem;
`

export const Badge = styled(BadgeMantine)`
    padding: 1rem;
    font-size: small;
    color: var(--white);
    margin-bottom: 1rem ;
`

export const Flex = styled(FlexMantine)`

`
