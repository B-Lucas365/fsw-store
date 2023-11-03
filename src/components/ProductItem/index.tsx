import { Product } from "@prisma/client";
import { Card, Flex } from "./styles";
import Image from "next/image";
import { Group, Text } from "@mantine/core";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card>
      <Card.Section bg={"#1A1A1A"}>
        <Image
          src={product.imageUrls[0]}
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="image"
        />
      </Card.Section>

      <Flex direction={"column"}>
        <Text size="sm">{product.name}</Text>
      </Flex>
    </Card>
  );
};
