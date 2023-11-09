import { prismaClient } from "../../lib/prisma";
import { CategoryItem } from "./components/categoryItem";
import { Badge, Container, Flex } from "./styles";
import { FaShapes } from "react-icons/fa";
import { SimpleGrid } from '@mantine/core';

export default async function Catalog() {
  const categories = await prismaClient.category.findMany({});

  return (
    <Container>
      <Badge variant="outline" color="#5033C3">
        <Flex gap={"xs"}>
          <FaShapes size={16} />
          Catálogo
        </Flex>
      </Badge>

      <SimpleGrid cols={2} >
        {categories.map(category => <CategoryItem key={category.id} category={category}/>)}
      </SimpleGrid>
    </Container>
  );
}
