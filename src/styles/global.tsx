"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #FFFFFF;
        --light-gray: #A1A1A1;

        --dark-purple: #5033C3;
        --lighr-purple: #8162FF;

        --black-01: #1A1A1A;
        --black-02: #0B0B0B;

        --dark-gray: #2A2A2A;
        --gray: #676767;
    }

    body {
        background: var(--black-02);

        .mantine-Drawer-content, 
        .mantine-Drawer-header {
            background: var(--black-02);
        }

        .mantine-Drawer-close {
            color: var(--white);
            background-color: transparent;
        }
    }

    
`;

export const GlobalStyles = () => {
  return <Globals />;
};
