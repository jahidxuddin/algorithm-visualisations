import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { algorithmCardList } from "@/config/algorithm-list";
import { Link } from "react-router-dom";

export default function AlgorithmList() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {algorithmCardList.map((card, i) => (
        <Card
          key={i}
          className="bg-gradient-to-br from-accent to-secondary text-text h-full w-full shadow-lg flex flex-col"
        >
          <CardHeader>
            <CardTitle className="dark text-text">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="dark text-text flex-1">
            {card.description}
          </CardContent>
          <CardFooter>
            <Link to={card.link} className="w-full">
              <Button className="bg-accent font-bold w-full text-xl">
                Visualize
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
