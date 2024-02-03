import AlgorithmList from "@/components/page/menu/AlgorithmList";

export default function Menu() {
  return (
    <main className="min-h-screen w-full bg-background text-text flex flex-col justify-center items-center gap-5 sm:gap-10 p-10 sm:p-24">
      <div className="h-48 w-full flex justify-center items-center">
        <h1 className="text-primary text-5xl sm:text-6xl font-extrabold">
          Choose an <span className="text-accent">algorithmn</span>
        </h1>
      </div>
      <AlgorithmList />
    </main>
  );
}
