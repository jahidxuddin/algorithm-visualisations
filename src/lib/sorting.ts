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

const quicksort = async (
  array: number[],
  updateFn: React.Dispatch<React.SetStateAction<TData[]>>,
  updateLoadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
      }
    }

    swap(arr, i + 1, high);
    return i + 1;
  };

  const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const recursiveSort = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pivot = partition(arr, low, high);
      await updateVisualization(arr, pivot, low, high);
      await recursiveSort(arr, low, pivot - 1);
      await recursiveSort(arr, pivot + 1, high);
    }
  };

  const updateVisualization = async (
    arr: number[],
    pivot: number,
    low: number,
    high: number
  ) => {
    updateFn((_prevState) =>
      arr.map((e, k) => ({
        name: e.toString(),
        uv: e,
        fill:
          k === pivot || (k >= low && k <= high)
            ? Fill.HIGHLIGHTED
            : Fill.DEFAULT,
      }))
    );

    await new Promise((resolve) => setTimeout(resolve, 0.1));
  };

  await recursiveSort(array, 0, array.length - 1);

  updateFn((_prevState) =>
    array.map((e) => ({
      name: e.toString(),
      uv: e,
      fill: Fill.DEFAULT,
    }))
  );

  updateLoadingState(false);
};

export { bubbleSort, selectionSort, insertionSort, quicksort };
