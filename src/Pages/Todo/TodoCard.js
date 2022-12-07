import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom"
import { deleteTodo, switchTodo, detailTodo } from '../../redux/modules/todoReducer';
import { Button, TodoItem, WillBeDone } from "../../Style/styles";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <WillBeDone>
      <TodoItem>{todo.content}</TodoItem>
      <Link to={`/todo/${todo.id}`}>
        {/* button을 컴포넌트로 */}
        <Button
          onClick={() => dispatch(detailTodo(todo.id))}
          bgColor={"rgba(247, 203, 79)"}
        >
          Detail
        </Button>
      </Link>
      {todo.isDone ? (
        <Button
          onClick={() => dispatch(switchTodo(todo.id))}
          bgColor={"rgba(98, 115, 124)"}
        >
          Revert
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(switchTodo(todo.id))}
          bgColor={"rgba(98, 115, 124)"}
        >
          Done
        </Button>
      )}
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        bgColor={"rgba(255, 69, 58)"}
      >
        Delete
      </Button>
    </WillBeDone>
  );
};

export default TodoCard;

// import React from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { useParams, Link } from "react-router-dom"
// import { deleteTodo, switchTodo, detailTodo } from '../../redux/modules/todoReducer';
// import { TodoItem, WillBeDone } from "../../Style/styles";
// import { StButton } from '../../Style/styles';

// const TodoCard = ({ todo }) => {
//   const dispatch = useDispatch();
//   return (
//     <WillBeDone>
//       <TodoItem>{todo.content}</TodoItem>
//       <StButton color="rgba(247, 203, 79)">Detail</StButton>
//       <StButton color="rgba(247, 203, 79)">Revert</StButton>
//       <StButton color="rgba(247, 203, 79)">Done</StButton>
//       <StButton color="rgba(247, 203, 79)">Delete</StButton>
//     </WillBeDone>
//   );
// };

// export default TodoCard;
