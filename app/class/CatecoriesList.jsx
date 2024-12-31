import { ButtonShow } from "../components/Button/ButtonShow";
import { categories } from "./categories";

export function CategoriesList() {
  return (
    <div className="flex items-center flex-wrap  justify-between gap-y-8 w-[100%] mt-12 cursor-default">
      {categories.map((category, index) => (
        <div
          key={index}
          className=" flex flex-col items-center h-[165px] bg-white shadow-md w-[360px] rounded-md hover:-mt-1 duration-150 "
        >
          <h2 className=" font-bold text-[22px] text-slate-800 mt-5">
            {category.title}
          </h2>
          <span className="mt-2 text-slate-400 text-sm font-light">
            {category.count}
          </span>
          <ButtonShow />
        </div>
      ))}
    </div>
  );
}
