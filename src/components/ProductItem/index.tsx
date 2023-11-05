import { Badge, Card, Flex, FlexProductPrice } from "./styles";
import Image from "next/image";
import {  Text } from "@mantine/core";
import { ProductWithTotalPrice } from "../../helpers/products";
import { AiOutlineArrowDown } from "react-icons/Ai";

interface ProductItemProps {
  product: ProductWithTotalPrice;
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

        {product.discountPercentage > 0 && (
        <Badge>
          <AiOutlineArrowDown size=".8rem" />
          {product.discountPercentage}%
        </Badge>)}
      </Card.Section>

      <Flex direction={"column"}>
        <Text size="sm">{product.name}</Text>

        <FlexProductPrice align="center" gap={"md"}>
          {product.discountPercentage > 0 ? (
            <>
              <Text className="total-price">
                R${product.totalPrice.toFixed(2)}
              </Text>
              <Text className="base-price" size="xs">
                R${Number(product.basePrice).toFixed(2)}
              </Text>
            </>
          ) : (
            <Text className="base-price" size="xs">
              R${Number(product.basePrice).toFixed(2)}
            </Text>
          )}
        </FlexProductPrice>
      </Flex>
    </Card>
  );
};
