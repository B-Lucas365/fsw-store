"use client";
import Image from "next/image";
import { HomeContainer } from "./styles";
import banner50off from "@/public/banner-55off.png";

export default function Home() {
  return (
    <HomeContainer>
      <Image src={banner50off} alt="banner-55%off" height={0} width={0} className="banner"/>
    </HomeContainer>
  );
}
