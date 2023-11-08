import { FooterContainer } from "./styles"
import {Text} from "@mantine/core"

export const Footer = () => {
    return (
        <FooterContainer>
            <Text size="xs">© 2023 Copyright</Text> <Text span={true} size="xs">FSW Store</Text> 
        </FooterContainer>
    )
}