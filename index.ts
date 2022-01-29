import TodoItem from "./TodoItem";
import { data } from './data'
import TodoCollection from "./TodoCollections";

const sampleTodos : TodoItem [] = data.map(
  (item) => new TodoItem(item.id, item.task, item.complete)
)

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos)

myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("친구만나기")

myTodoCollection.markComplete(3, true)

console.log(`${myTodoCollection.userName}`);

myTodoCollection.removeComplete();

// 위처럼 todoItem에서 꺼내지 않고 TodoCollections에서 getTodoItems에서 꺼내도록
myTodoCollection.getTodoItems(true).forEach((item)=>item.printDetails())
// 위 true로 준 값을 아래는 false로 나오도록
console.log("------------------");
myTodoCollection.getTodoItems(false).forEach((item)=>item.printDetails())
