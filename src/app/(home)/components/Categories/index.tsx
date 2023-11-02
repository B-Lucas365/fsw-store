import { prismaClient } from "../../../../lib/prisma";
import { CategoryItem } from "../Category-item";
import { Grid } from "./styles";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <Grid>
      {categories.map((category) => (
        <Grid.Col span={6} key={category.id}>
          <CategoryItem category={category} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Categories;
