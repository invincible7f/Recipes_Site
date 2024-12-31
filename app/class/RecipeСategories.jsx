import { CategoriesList } from "./CatecoriesList";
import { categories } from "./categories";

export function RecipeCategories() {
  return (
    <section className="flex flex-col items-center justify-center  ml-[300px] mr-[300px]">
      <h1 className="text-4xl font-bold mt-12 text-slate-800 ">
        Категорії рецептів
      </h1>
      <CategoriesList />
    </section>
  );
}
