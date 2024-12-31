import { ButtonShow } from "../Button/ButtonShow";
import { recipes } from "./constants";

export function RecipesList() {
  return (
    <div className="flex justify-between mt-7 cursor-default">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="bg-white w-[350px] h-[440px]  shadow-md rounded-lg hover:-mt-1 duration-300"
        >
          {recipe.img}
          <h3 className="text-2xl font-bold mt-7 ml-5 text-slate-800">
            {recipe.dish}
          </h3>
          <p className="w-[310px] ml-5 mt-3 font-normal text-slate-800">
            {recipe.description}
          </p>
          <div className="ml-5 mt-3">
            <span className="text-sm font-normal text-slate-500">
              {recipe.time}
            </span>
            <span className="text-sm font-normal text-slate-500 ml-1">
              {recipe.complexity}
            </span>
          </div>
          <ButtonShow />
        </div>
      ))}
    </div>
  );
}
