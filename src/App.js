import "./styles.css";
import { useState } from "react";

export default function App() {
  const actions = ["pop", "push", "peek", "clear", "isEmpty"];
  const [stack, setStack] = useState([]);
  const [msg, setMsg] = useState(null);

  // let renderedStack;
  const [userInput, setUserInput] = useState("");
  const handleStackActions = (btn) => {
    if (btn === "push") {
      if (stack.length !== 5) {
        // renderedStack = stack.map((item) => <p>{item}</p>);
        setStack((prevStack) => {
          console.log([
            ...prevStack,
            <p className="stack-item">{userInput}</p>
          ]);
          return [<p className="stack-item">{userInput}</p>, ...prevStack];
        });
      } else {
        setMsg("stack is full you can't push more");
      }
    }
    if (btn === "pop") {
      if (stack.length !== 0) {
        const myStack = stack;
        const shiftedEl = myStack.shift();
        setMsg(`popped element ${shiftedEl.props.children}`);
        setStack((prevStack) => [...myStack]);
      } else {
        setMsg("stack is empty you cant pop");
      }
    }
    if (btn === "peek") {
      if (stack.length > 0) {
        const peekElement = stack[0];
        setMsg("peek is " + peekElement.props.children);
      } else {
        setMsg("stack is empty so no peek");
      }
    }
    if (btn === "clear") {
      setStack([]);
      setMsg("stack is empty");
    }
    if (btn === "isEmpty") {
      const stackLength = stack.length;
      setMsg(`${stackLength < 5 ? "yes push now" : "no do not push"}`);
    }
  };

  const btns = actions.map((btn) => (
    <button key={btn} onClick={() => handleStackActions(btn)}>
      {btn}
    </button>
  ));
  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      {btns}
      {msg && <p>{msg}</p>}
      <div className="stack">{stack}</div>
    </div>
  );
}
