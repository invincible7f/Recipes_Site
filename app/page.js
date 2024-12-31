import Image from "next/image";
import { Header } from "./components/Header";
import { Popular_recipes, Welcome } from "./components/Main";

export default function Home() {
  return (
    <>
      <Header />

      <main className="ml-[300px] mr-[300px]">
        <Welcome />
        <Popular_recipes/>
      </main>
    </>
  );
}
