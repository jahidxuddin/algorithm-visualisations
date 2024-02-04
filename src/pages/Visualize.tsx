import AlgorithmChart from "@/components/page/visualize/AlgorithmChart";
import { algorithmCardList } from "@/config/algorithm-list";
import { useParams, Navigate } from "react-router-dom";

export default function Visualize() {
  const { algorithm } = useParams();

  if (!algorithm) {
    return <Navigate to="/" />;
  }

  const algorithmTitles = algorithmCardList.map(
    (algorithm) => algorithm.title
  );

  const algorithmTitle = algorithm
    .replace("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!algorithmTitles.includes(algorithmTitle)) {
    return <Navigate to="/" />;
  }

  const algorithmFn = algorithmCardList.find(
    (e) => e.title === algorithmTitle
  )?.algorithmFn;

  if (typeof algorithmFn === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <main className="min-h-screen w-full bg-background text-text py-20 px-10 sm:p-24">
      <div className="h-full flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold">{algorithmTitle}</h1>
        <AlgorithmChart algorithmFn={algorithmFn!} />
      </div>
    </main>
  );
}
