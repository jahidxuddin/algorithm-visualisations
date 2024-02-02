import AlgorithmList from "@/components/page/menu/AlgorithmList";

export default function Menu() {
  return (
    <main className="min-h-screen w-full bg-background text-text flex flex-col justify-center items-center gap-10 p-24">
      <div className="h-48 flex justify-center items-center">
        <h1 className="text-primary text-6xl font-extrabold">
          Choose an <span className="text-accent">algorithmn</span>
        </h1>
      </div>
      <AlgorithmList />
    </main>
  );
}
