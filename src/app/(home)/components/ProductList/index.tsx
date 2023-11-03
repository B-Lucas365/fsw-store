'use client'

import { Product } from "@prisma/client";
import { Carousel } from "./styles";
import { ProductItem } from "../../../../components/ProductItem";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Carousel slideGap="md" dragFree align="start" slideSize="200px" withControls={false}>
      {products.map((product) => (
        <Carousel.Slide key={product.id}>
          <ProductItem product={product} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
