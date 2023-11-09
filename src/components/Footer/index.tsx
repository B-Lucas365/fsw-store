import { Text } from "@mantine/core"
import { FooterContainer } from "./styles"


export const Footer = () => {
    return (
        <FooterContainer>
            <Text size="xs">© 2023 Copyright</Text> <Text span={true} size="xs">FSW Store</Text> 
        </FooterContainer>
    )
}