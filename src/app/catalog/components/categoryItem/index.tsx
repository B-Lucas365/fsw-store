import { Category } from "@prisma/client";
import { Flex } from "./styles";
import Image from "next/image";
import {Text} from "@mantine/core"

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Flex direction="column">
      <Flex className="image-container">
        <Image
          alt={category.name}
          src={category.imageUrl}
          width={0}
          height={0}
          sizes="100vh"

          className="image"
        />
      </Flex>

      <Flex bg="#1A1A1A" className="name-content" justify="center">
        <Text ta="center" >{category.name}</Text>
      </Flex>
    </Flex>
  );
};
