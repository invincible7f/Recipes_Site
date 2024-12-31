import { recipes } from "./constants";
import { RecipesList } from "./recipes_list";

export function Popular_recipes() {
  return (
    <section className=" h-[510px] my-9 rounded-xl bg-opacity-70 -mt-1">
      <div>
        <h3 className="text-[30px] font-bold text-slate-800">
          Популярні рецепти
        </h3>
        <RecipesList />
      </div>
    </section>
  );
}
