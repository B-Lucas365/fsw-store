import { Flex, SimpleGrid } from "@mantine/core";
import { prismaClient } from "../../../lib/prisma";
import { FaShapes } from "react-icons/fa";
import { Badge, Container, Group } from "./styles";
import { ProductItem } from "../../../components/ProductItem";
import { ComputeProductTotalPrice } from "../../../helpers/products";
import { CATERGORY_ICON } from "../../../constants/category-icon";

export default async function CategoryProducts({ params }: any) {
  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  return (
    <Container>
      <Badge variant="outline" color="#5033C3" p={"md"}>
        <Flex gap={"xs"} color="#fff">
          {CATERGORY_ICON[params.slug as keyof typeof CATERGORY_ICON]}
          {params.slug}
        </Flex>
      </Badge>
      <Group justify="center">
        <SimpleGrid cols={2} spacing={"xl"}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={ComputeProductTotalPrice(product)}
            />
          ))}
        </SimpleGrid>
      </Group>
    </Container>
  );
}
