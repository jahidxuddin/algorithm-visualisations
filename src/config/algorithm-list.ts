import { TData } from "@/components/page/visualize/AlgorithmChart";
import { bubbleSort, insertionSort, selectionSort } from "@/lib/sorting";

type TAlgorithmCard = {
  title: string;
  description: string;
  link: string;
  algorithmFn: (
    array: number[],
    updateFn: React.Dispatch<React.SetStateAction<TData[]>>,
    updateLoadingState: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

const algorithmCardList: TAlgorithmCard[] = [
  {
    title: "Bubble Sort",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    link: "/visualize/bubble-sort",
    algorithmFn: bubbleSort,
  },
  {
    title: "Selection Sort",
    description:
      "Selection sort is a straightforward sorting algorithm that works by dividing the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted sublist and swaps it with the leftmost unsorted element. This process continues until the entire list is sorted.",
    link: "/visualize/selection-sort",
    algorithmFn: selectionSort,
  },
  {
    title: "Insertion Sort",
    description:
      "Insertion Sort is a straightforward sorting algorithm that builds the final sorted list one element at a time. It iterates through the list, considering one element at a time and inserting it into its correct position within the already sorted part of the list. This process continues until the entire list is sorted.",
    link: "/visualize/insertion-sort",
    algorithmFn: insertionSort,
  },
];

export { type TAlgorithmCard, algorithmCardList };
