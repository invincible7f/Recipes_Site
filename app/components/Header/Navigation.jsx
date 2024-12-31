import Link from "next/link";

export function Navigation({ headline1, headline2, headline3 }) {
  const navigation = [
    {
      title: headline1,
      url: "/",
    },
    {
      title: headline2,
      url: "/class",
    },
    {
      title: headline3,
      url: "/about",
    },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-x-10 mt-1">
        {navigation.map((nav, index) => {
          return (
            <li
              key={index}
              className="items-center  hover:text-violet-900 duration-200"
            >
              <Link href={nav.url}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
