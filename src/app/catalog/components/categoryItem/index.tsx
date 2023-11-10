import { Category } from "@prisma/client";
import { Flex } from "./styles";
import Image from "next/image";
import { Text } from "@mantine/core";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
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
          <Text ta="center">{category.name}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};
