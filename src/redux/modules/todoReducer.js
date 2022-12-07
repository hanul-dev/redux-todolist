const ADD_TODO = "ADD_TODO";
const SWITCH_TODO = "SWITCH_TODO";
const DELETE_TODO = "DELETE_TODO";
const DETAIL_TODO = "DETAIL_TODO";

// Component에서 사용할 Action Creator Function : action 객체 반환
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
}
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload
  }
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
}
export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload
  }
}

const divideList = (list) => {
  const willDoneList = list.filter(todo => todo.isDone === false );
  const doneList = list.filter(todo => todo.isDone === true );
  return {willDoneList, doneList};
}

// done, willDone, selected 없애고 처리하기 (연산 줄이기, 효율적으로)
// 불필요한 Front logic 최대한 줄이기
const initial = {
  todos: [],
  done: [],
  willDone: [],
  selected: {}
};

export const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        willDone: divideList([...state.todos, action.payload]).willDoneList,
      };
    case SWITCH_TODO:
      const switchId = action.payload;
      const switchedList = state.todos.map((todo) => todo.id === switchId ? { ...todo, isDone: !todo.isDone}: todo);
      return {
        todos: switchedList,
        willDone:divideList(switchedList).willDoneList,
        done: divideList(switchedList).doneList
      };
    case DELETE_TODO:
      const deleteId = action.payload;
      const deletedList = state.todos.filter((todo) => todo.id !== deleteId );
      return {
        todos: deletedList,
        willDone: divideList(deletedList).willDoneList,
        done: divideList(deletedList).doneList
      };
    case DETAIL_TODO:
      const detailId = action.payload;
      const [detailTodo] = state.todos.filter((todo) => todo.id === detailId);
      return {
        ...state,
        selected: {...detailTodo, id: detailId}
      };
    default:
      return state;
  }
};