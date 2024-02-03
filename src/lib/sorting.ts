import { TData } from "@/components/page/visualize/AlgorithmChart";

const bubbleSort = (
  array: number[],
  updateFn: (newState: TData[]) => void
): number[] => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        updateFn(array.map((e) => ({ name: e.toString(), uv: e })));
      }
    }
  }

  return array;
};

const selectionSort = (
  array: number[],
  updateFn: (newState: TData[]) => void
): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    const tmp = array[min];
    array[min] = array[i];
    array[i] = tmp;
    updateFn(array.map((e) => ({ name: e.toString(), uv: e })));
  }

  return array;
};

export { bubbleSort, selectionSort };
