import Image from "next/image";
import { Flex, HomeContainer, Text } from "./styles";
import banner50off from "@/public/banner-55off.png";
import banner50offmouses from "@/public/banner-mouses.png";
import bannerFones from "@/public/banner-fones.png";

import Categories from "./components/Categories";
import { prismaClient } from "../../lib/prisma";
import { ProductList } from "./components/ProductList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <HomeContainer>
      <Image
        src={banner50off}
        alt="banner-55%off"
        height={0}
        width={0}
        className="banner"
      />

      <Categories />

      <Flex direction={"column"}>
        <Text>Ofertas</Text>
        <ProductList products={deals} />
      </Flex>

      <Image
        src={banner50offmouses}
        alt="banner 55% off em mouses"
        height={0}
        width={0}
        className="banner"
      />

      <Flex direction={"column"} mt={"lg"}>
        <Text>Teclados</Text>
        <ProductList products={keyboards} />
      </Flex>

      <Image
        src={bannerFones}
        alt="banner 55% off em mouses"
        height={0}
        width={0}
        className="banner"
      />

      <Flex direction={"column"} mt={"lg"}>
        <Text>Mouses</Text>
        <ProductList products={mouses} />
      </Flex>
    </HomeContainer>
  );
}
