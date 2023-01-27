import "./style/app.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./components/action";
import { useState } from "react";
import Img from "./assets/Union.png";

function App() {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };

  return (
    <div className="blocks">

      <div className="first-block">
        <div className="first-block-todo">
          <input
            className="first-block-todo-input"
            placeholder="here your todo..."
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="first-block-todo-btn">
          <button className="first-block-todo-save-btn" onClick={todoSubmitHandler}>
            <p>Save Todo</p>
          </button>
        </div>
      </div>
      

      
      <div className="second-block">
        {todos?.map((todo) => (
          <div className="second-block-todo">
            <div className="second-block-todo-list" key={todo.id}>{todo.task}</div>
            <div className="r">
              <button
                className="second-block-todo-list-delete-btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <img src={Img} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
