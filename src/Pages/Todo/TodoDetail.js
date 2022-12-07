import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { Card, Button } from '../../Style/styles';

const TodoDetail = () => {
  const navigate = useNavigate();
  const selectedTodo = useSelector(state => state.todoReducer.selected)
  console.log(selectedTodo);
  return (
    <>
      <Button  bgColor={"rgba(111, 73, 211)"} onClick={() => navigate(-1)}>Back</Button>
      <Card>
        <div>
        ID: {selectedTodo.id}
        </div>
        <div>
        CONTENT: {selectedTodo.content}
        </div>
      </Card>
    </>
  );
};

export default TodoDetail;