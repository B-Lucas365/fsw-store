import { Category } from "@prisma/client";
import { Flex } from "./styles";
import { Text } from "@mantine/core";
import { CATERGORY_ICON } from "../../../../constants/category-icon";

interface ItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: ItemProps) => {
  return (
    <Flex color="#fff">
      {CATERGORY_ICON[category.slug as keyof typeof CATERGORY_ICON]}
      <Text span={true} size="sm">
        {category.name}
      </Text>
    </Flex>
  );
};
