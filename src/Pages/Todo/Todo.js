import React from "react";
import { useSelector } from "react-redux";
import { Container, Title, TodoList } from "../../Style/styles";
import TodoForm from "./TodoForm"
import TodoCard from "./TodoCard";

const Todo = () => {
  const {willDone, done} = useSelector(state => state.todoReducer);
  return (
  <div>
    <TodoForm></TodoForm>
    <Container>
      <Title fontColor={"rgba(46, 122,246)"}>Daily</Title>
      <TodoList>
        {willDone?.map(todo => {
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
              ></TodoCard>
            );
        })}
      </TodoList>
      <Title fontColor={"rgba(98, 115, 124)"}>Completed</Title>
      <TodoList>
        {done?.map(todo => {
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
              ></TodoCard>
            );
        })}
      </TodoList>
    </Container>
  </div>
  );
};

export default Todo;
