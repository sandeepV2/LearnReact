// define store with intial value.
// add reducer to increment.
// define the actions. 
// import it in app.jsx.

import {createStore} from "redux";
import { useSelector, useDispatch } from "react-redux";

export const incA = (step=1) => ({type:"inc", step})
export const decA = (step=1) => ({type:"dec", step})


const initialState = { count:10, title: "default title" };

function CountReducer(state = initialState, action) {
    if (action.type === "inc") {
        let newState = { ...state, count: state.count + action.step };
        return newState;
    }
    if (action.type === "dec") {
        let newState = { ...state, count: state.count - action.step };
        return newState;
    }
    return state;
}


export const store = createStore(CountReducer, initialState);

const ReduxCounter = () => {
	const dispatch = useDispatch();
	const [count, title] = useSelector((state) => {
		console.log(state);
		return [state.count, state.title];
	});
	return (
		<div>
            <h5>{title}</h5>
			<h3>{count}</h3>
			<button
				onClick={() => {
					dispatch(incA());
				}}
			>
				increase
			</button>
			<button
				onClick={() => {
					dispatch(decA(7));
				}}
			>
				decrease
			</button>
		</div>
	);
};
export default ReduxCounter;