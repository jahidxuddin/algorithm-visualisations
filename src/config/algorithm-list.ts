type TAlgorithmCard = {
  title: string;
  description: string;
  link: string;
};

const algorithmCardList: TAlgorithmCard[] = [
  {
    title: "Bubble Sort",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    link: "/sorting-algorithm/bubble-sort",
  },
  {
    title: "Selection Sort",
    description:
      "Selection sort is a straightforward sorting algorithm that works by dividing the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted sublist and swaps it with the leftmost unsorted element. This process continues until the entire list is sorted.",
    link: "/sorting-algorithm/selection-sort",
  },
];

export { type TAlgorithmCard, algorithmCardList };
