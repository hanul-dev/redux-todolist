import { createStore } from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "../modules/todoReducer"

const rootReducer = combineReducers({todoReducer});
const store = createStore(rootReducer);

/*
1. createStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.
*/

/*
2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
/*
1. 스토어를 만든다.
2. 스토어는 (Provider => 내가 쓰고 싶은 컴포넌트 => 내가 쓰고싶은 컴포넌트 => useSelector, useDispatch)
3.컴포넌트가 => action을 dispatch에 담아주고 => dispatch가 값이 당겨지면 -> store의 reducer함수를 호출 -> 값을 반환 -> store -> 리렌더링
*/

export default store;
