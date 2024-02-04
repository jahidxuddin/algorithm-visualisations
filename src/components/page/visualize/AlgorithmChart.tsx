import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";

export type TData = {
  name: string;
  uv: number;
  fill: string;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AlgorithmChart({
  algorithmFn,
}: {
  algorithmFn: (
    array: number[],
    updateFn: React.Dispatch<React.SetStateAction<TData[]>>
  ) => void;
}) {
  const [dataState, setDataState] = useState<TData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      algorithmFn(
        dataState.map((e) => e.uv),
        setDataState
      );
    }
  }, [loading]);

  const handleAddClick = () => {
    for (let i = 0; i < 25; i++) {
      const randomNumber = getRandomNumber(1, 100);
      setDataState((prevDataState) => [
        ...prevDataState,
        { name: randomNumber.toString(), uv: randomNumber, fill: "#1a4774" },
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
          <Bar dataKey="uv" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-3">
        <Button
          disabled={loading}
          onClick={handleAddClick}
          className="font-bold"
        >
          Add 25 records
        </Button>
        <Button
          disabled={loading}
          onClick={handleStartClick}
          className="font-bold"
        >
          Start
        </Button>
        {dataState.length > 1 && (
          <Button
            disabled={loading}
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
