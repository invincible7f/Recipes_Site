import { MoveRight } from "lucide-react";

export function ButtonShow() {
  return (
    <button className="flex items-center text-sm text-white text-center h-9 w-40 rounded-md  bg-violet-900 ml-5 mt-5 hover:bg-violet-700 duration-500">
      <span className="ml-4">Дивитися рецепт</span>
      <MoveRight className="  scale-50 " />
    </button>
  );
}
