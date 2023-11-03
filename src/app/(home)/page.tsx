import Image from "next/image";
import { HomeContainer } from "./styles";
import banner50off from "@/public/banner-55off.png";
import Categories from "./components/Categories";
import { prismaClient } from "../../lib/prisma";
import { ProductList } from "./components/ProductList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

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

      <ProductList products={deals}/>
      
    </HomeContainer>
  );
}
