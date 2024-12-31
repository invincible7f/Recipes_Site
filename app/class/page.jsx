import { Header } from "../components/Header";
import { RecipeCategories } from "./RecipeСategories";

export default function Category() {
  return (
    <>
      <Header />
      <main>
        {" "}
        <RecipeCategories />
      </main>
    </>
  );
}
