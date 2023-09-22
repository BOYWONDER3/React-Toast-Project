import { useRef } from "react";
import "./styles.css";
import { useToast } from "./useToast";

export default function App() {
  const { addToast, removeToast, toasts } = useToast;
  const inputRef = useRef(null);

  function createToast() {
    if (inputRef.current == null || inputRef.current.value === "") return;
    addToast(inputRef.current.value);
  }

  return (
    <div className="form">
      <input type="text" ref={inputRef} />
      <button onClick={createToast}> Add Toast </button>
    </div>
  );
}
