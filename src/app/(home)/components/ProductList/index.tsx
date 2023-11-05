'use client'
import { Product } from "@prisma/client";
import { Carousel } from "./styles";
import { ProductItem } from "../../../../components/ProductItem";
import { ComputeProductTotalPrice } from "../../../../helpers/products";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Carousel dragFree align="start" slideSize="200px" withControls={false} slideGap={"xs"} containScroll="keepSnaps">
      {products.map((product) => (
        <Carousel.Slide key={product.id}>
          <ProductItem product={ComputeProductTotalPrice(product)} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
