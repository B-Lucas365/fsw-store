import { prismaClient } from "../../../../lib/prisma";
import { CategoryItem } from "../Category-item";
import { Grid } from "./styles";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <Grid
      cols={2}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "xs", sm: "xl" }}
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Grid>
  );
};

export default Categories;
