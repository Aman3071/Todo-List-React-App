import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todo?.todos || []); // Safe access with fallback

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("Delete", id);
    dispatch(deleteTodo(id));
  };

  const clickDone = (id) => {
    console.log("Done", id);
    dispatch(markAsDone(id));
  };

  return (
    <div style={styles.container}>
      <AddForm />
      <h1 style={styles.heading}>Todo List App</h1>
      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span
              style={{
                ...styles.todoText,
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "#888" : "#333",
              }}
            >
              {todo.task}
            </span>
            <div style={styles.buttonContainer}>
              <button
                style={styles.deleteButton}
                onClick={() => clickHandler(todo.id)}
              >
                Delete
              </button>
              <button
                style={styles.doneButton}
                onClick={() => clickDone(todo.id)}
              >
                {todo.isDone ? "Undo" : "Mark As Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },
  todoList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  todoItemHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  todoText: {
    fontSize: "18px",
    fontWeight: "500",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  deleteButton: {
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  doneButton: {
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  deleteButtonHover: {
    backgroundColor: "#e60000",
    transform: "scale(1.05)",
  },
  doneButtonHover: {
    backgroundColor: "#45a049",
    transform: "scale(1.05)",
  },
};

// Add hover effects
const hoverEffects = {
  deleteButton: {
    "&:hover": {
      backgroundColor: "#e60000",
      transform: "scale(1.05)",
    },
  },
  doneButton: {
    "&:hover": {
      backgroundColor: "#45a049",
      transform: "scale(1.05)",
    },
  },
};
