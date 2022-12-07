import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todoReducer';
import { Form,TodoInput, Button } from "../../Style/styles";

const TodoForm = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatch();

  const todoChangeHandler = event => {
    setEnteredTodo(event.target.value);
  };
  const addTodoHandler = (e) =>{
    e.preventDefault();
    const todo = {
      id : Math.floor(Math.random() * (1000000) + 1),
      content: enteredTodo,
      isDone: false
    }
    dispatch(addTodo(todo));
    setEnteredTodo("");
  } 
  return (
    <Form onSubmit={addTodoHandler}>
       {/* input 을 컴포넌트로 */}
      <TodoInput
        onChange={todoChangeHandler}
        placeholder="How lovely day!"
        value={enteredTodo}
        required
      ></TodoInput>
      <Button bgColor={"rgba(111, 73, 211)"}>New</Button>
    </Form>
  );
};

export default TodoForm;
