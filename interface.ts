interface TodoItem {
  id: string;
  task: string;
  complete: boolean;
}

const todo: TodoItem = {
  id: "A123",
  task: "Study TypeScript!",
  complete: false,
};

interface SumFunc {
  (leftNumber: number, rightNumber: number): number;
}

const mySum: SumFunc = function (leftNumber: number, rightNumber) {
  return leftNumber + rightNumber;
};
