import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { ButtonLoading } from "@/components/ui/button-loading";

export type TData = {
  name: string;
  uv: number;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AlgorithmChart({
  algorithmFn,
}: {
  algorithmFn: (
    array: number[],
    updateFn: (newState: TData[]) => void
  ) => number[];
}) {
  const [dataState, setDataState] = useState<TData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      algorithmFn(
        dataState.map((e) => e.uv),
        setDataState
      );
      setLoading(false);
    }
  }, [loading]);

  const handleAddClick = () => {
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomNumber(1, 100);
      setDataState((prevDataState) => [
        ...prevDataState,
        { name: randomNumber.toString(), uv: randomNumber },
      ]);
    }
  };

  const handleStartClick = () => {
    if (dataState.length > 0) setLoading((prevState) => !prevState);
  };

  const handleResetClick = () => {
    setDataState([]);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <ResponsiveContainer width="100%" height={450} maxHeight={450}>
        <BarChart data={dataState}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#1a4774" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-3">
        <Button
          disabled={loading}
          onClick={handleAddClick}
          className="font-bold"
        >
          Add 100 records
        </Button>
        {!loading && (
          <Button onClick={handleStartClick} className="font-bold">
            Start
          </Button>
        )}
        {loading && (
          <ButtonLoading className="font-bold">Computing...</ButtonLoading>
        )}
        {dataState.length > 1 && (
          <Button
            onClick={handleResetClick}
            className="font-bold"
            variant="destructive"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
