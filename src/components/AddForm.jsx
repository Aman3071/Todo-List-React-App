import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };

  // Internal CSS styles
  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "30px 0",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "12px 16px",
      fontSize: "16px",
      border: "2px solid #e0e0e0",
      borderRadius: "8px",
      marginRight: "12px",
      width: "350px",
      outline: "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: "#fff",
      color: "#333",
    },
    inputFocus: {
      borderColor: "#007bff",
      boxShadow: "0 0 8px rgba(0, 123, 255, 0.3)",
    },
    button: {
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "600",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
      transform: "scale(1.05)",
    },
  };

  return (
    <>
      <form onSubmit={submitHandler} style={styles.form}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
          onFocus={(e) => {
            e.target.style.borderColor = styles.inputFocus.borderColor;
            e.target.style.boxShadow = styles.inputFocus.boxShadow;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e0e0e0";
            e.target.style.boxShadow = "none";
          }}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = "scale(1)";
          }}
        >
          Add Task
        </button>
      </form>
    </>
  );
}
