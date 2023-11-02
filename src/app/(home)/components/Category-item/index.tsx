import { Category } from "@prisma/client"
import { Flex, HeadphoneIcon, KeyboardIcon, MonitorIcon, MouseIcon, MousePadIcon, SpeakersIcon } from "./styles"
import { Text } from "@mantine/core"
import { FiSquare } from "react-icons/Fi"

interface ItemProps {
    category: Category
}

export const CategoryItem = ({category}: ItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon />,
        monitors: <MonitorIcon />,
        headphones: <HeadphoneIcon />,
        mousepads: <MousePadIcon />,
        speakers: <SpeakersIcon />,
        mouses: <MouseIcon/>,
    }

    return (
        <Flex color="#fff">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <Text span={true} size="sm">{category.name}</Text>
        </Flex>
    )
}