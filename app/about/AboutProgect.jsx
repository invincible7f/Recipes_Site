import Image from "next/image";
import coockImage from "../components/images/cook_image.jpg";

export function AboutProgect() {
  return (
    <section className="ml-[400px] mr-[400px] cursor-default">
      <h1 className="text-4xl font-bold mt-12 text-violet-900  text-center">
        Про наш кулінарний проект
      </h1>
      <article className="flex gap-12">
        <div className="w-[50%]">
          <Image
            src={coockImage}
            alt="img"
            className=" w-[100%]  object-cover rounded-lg mt-12 "
          />
        </div>
        <div className="mt-12 w-[50%] ">
          <h2 className="font-bold text-2xl">Наша мета</h2>
          <p className=" font-extralight text-slate-500 w-[350px] mt-7">
            Ми створили цей проект з метою зібрати найкращі кулінарні рецепти з
            усього світу та зробити їх доступними для кожного. Наша команда
            професійних кухарів ретельно відбирає та тестує кожен рецепт.
          </p>
          <h2 className="font-bold text-2xl mt-7">Чому ми?</h2>
          <ul className="flex flex-col list-disc gap-3 mt-7 font-extralight text-slate-500 ml-4">
            <li>Тільки перевірені рецепти</li>
            <li>Детальні покрокові інструкції</li>
            <li>Поради від професійних кухарів</li>
            <li>Регулярні поновлення</li>
          </ul>
          <h2 className="font-bold text-2xl mt-7">Доєднюйтесь до нас</h2>
          <p className=" font-extralight text-slate-500 w-[350px] mt-7">
            Станьте частиною нашої кулінарної спільноти! Діліться своїми
            рецептами, досвідом та кулінарними історіями.
          </p>
        </div>
      </article>
    </section>
  );
}
