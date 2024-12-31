import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className=" flex  items-center h-[70px] bg-white shadow-md">
      <div className="flex items-center justify-between w-[100%] ml-[300px] mr-[300px]">
        <div>
          <h3 className=" text-2xl text-violet-900 font-bold w-52">
            Смачні рецепти
          </h3>
        </div>
        <Navigation
          headline1="Головна"
          headline2="Категорії"
          headline3="Про нас"
        />
      </div>
    </header>
  );
}
