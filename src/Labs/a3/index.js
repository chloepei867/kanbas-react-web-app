import Classes from "./Classes.js";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem.js";
import TodoList from "./todo/TodoList.js";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <>
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
      <PathParameters />
    </>
  );
}
export default Assignment3;
