import AlgorithmChart from "@/components/page/visualize/AlgorithmChart";
import { algorithmCardList } from "@/config/algorithm-list";
import { useParams, Navigate } from "react-router-dom";

export default function Visualize() {
  const { algorithmn } = useParams();

  if (!algorithmn) {
    return <Navigate to="/" />;
  }

  const algorithmnTitles = algorithmCardList.map(
    (algorithmn) => algorithmn.title
  );

  const algorithmnTitle = algorithmn
    .replace("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!algorithmnTitles.includes(algorithmnTitle)) {
    return <Navigate to="/" />;
  }

  const algorithmFn = algorithmCardList.find(
    (e) => e.title === algorithmnTitle
  )?.algorithmFn;

  if (typeof algorithmFn === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <main className="min-h-screen w-full bg-background text-text py-20 px-10 sm:p-24">
      <div className="h-full flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold">{algorithmnTitle}</h1>
        <AlgorithmChart algorithmFn={algorithmFn!} />
      </div>
    </main>
  );
}
