import { TData } from "@/components/page/visualize/AlgorithmChart";

enum Fill {
  DEFAULT = "#1a4774",
  HIGHLIGHTED = "#782cc3",
}

const bubbleSort = async (
  array: number[],
  updateFn: React.Dispatch<React.SetStateAction<TData[]>>,
  updateLoadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      updateFn((_prevState) =>
        array.map((e, k) => ({
          name: e.toString(),
          uv: e,
          fill: k === j - 1 ? Fill.HIGHLIGHTED : Fill.DEFAULT,
        }))
      );

      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      await new Promise((resolve) => setTimeout(resolve, 0.1));
    }
  }
  updateLoadingState(false);
};

const selectionSort = async (
  array: number[],
  updateFn: React.Dispatch<React.SetStateAction<TData[]>>,
  updateLoadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    updateFn((_prevState) =>
      array.map((e, k) => ({
        name: e.toString(),
        uv: e,
        fill: k === min - 1 ? Fill.HIGHLIGHTED : Fill.DEFAULT,
      }))
    );

    await new Promise((resolve) => setTimeout(resolve, 0.1));

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      updateFn((_prevState) =>
        array.map((e, k) => ({
          name: e.toString(),
          uv: e,
          fill: k === min - 1 ? Fill.HIGHLIGHTED : Fill.DEFAULT,
        }))
      );
    }

    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;

    await new Promise((resolve) => setTimeout(resolve, 0.1));
  }

  updateFn((_prevState) =>
    array.map((e) => ({
      name: e.toString(),
      uv: e,
      fill: Fill.DEFAULT,
    }))
  );

  updateLoadingState(false);
};

const insertionSort = async (
  array: number[],
  updateFn: React.Dispatch<React.SetStateAction<TData[]>>,
  updateLoadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    let j = i - 1;

    updateFn((_prevState) =>
      array.map((e, k) => ({
        name: e.toString(),
        uv: e,
        fill: k === i || k === j ? Fill.HIGHLIGHTED : Fill.DEFAULT,
      }))
    );

    await new Promise((resolve) => setTimeout(resolve, 0.1));

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;

      updateFn((_prevState) =>
        array.map((e, k) => ({
          name: e.toString(),
          uv: e,
          fill: k === j + 1 ? Fill.HIGHLIGHTED : Fill.DEFAULT,
        }))
      );

      await new Promise((resolve) => setTimeout(resolve, 0.1));
    }

    array[j + 1] = currentElement;

    updateFn((_prevState) =>
      array.map((e) => ({
        name: e.toString(),
        uv: e,
        fill: Fill.DEFAULT,
      }))
    );

    await new Promise((resolve) => setTimeout(resolve, 0.1));
  }

  updateLoadingState(false);
};

export { bubbleSort, selectionSort, insertionSort };
