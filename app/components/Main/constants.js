import Image from "next/image";
import borsch from "../images/borsch.jpg";
import griddled_chicken from "../images/griddled-chicken.jpg";
import pasta_karbonara from "../images/pasta_karbonara.jpg";

export const recipes = [
    {
      img: <Image src={borsch} alt="img" className="w-[100%] h-[200px] object-cover rounded-lg rounded-b-none" />,
      dish: "Борщ класичний",
      description: "Традиційний український борщ із яловичиною та сметаною",
      time: "⏰ 2 години",
      complexity: "📊 Середня",
    },
  
    {
      img: <Image src={pasta_karbonara} alt="img" className="w-[100%] h-[200px] object-cover rounded-lg rounded-b-none" />,
      dish: "Паста Карбонара",
      description: "Італійська паста з беконом у вершковому соусі",
      time: "⏰ 30 хвилин",
      complexity: "📊 Легка",
    },
  
    {
      img: <Image src={griddled_chicken} alt="img" className="w-[100%] h-[200px] object-cover rounded-lg rounded-b-none" />,
      dish: "Цезар з куркою",
      description: "Популярний салат із хрусткими сухариками",
      time: "⏰ 45 хвилин",
      complexity: "📊 Легка",
    },
  ];