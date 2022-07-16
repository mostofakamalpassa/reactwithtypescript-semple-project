import { useReducer } from "react"

type CounterState = {
    count: number;
}
type CounterAction = {
    // type:string;
    type:'increment' | 'decrement';
    payload:number;
}

const reduce = (state: CounterState, action: CounterAction) =>{
    switch(action.type){
        case 'increment':
            return{count:state.count + action.payload}
        
        case 'decrement':
            return{count:state.count - action.payload};
        default:
            return state;
    }
}
const  initialState = {count:0}


export const Counter = ()=>{

    const [state, dispatch] = useReducer(reduce, initialState)
    return(<>
            Count: {state.count}
            <button onClick={()=> dispatch({type:'increment', payload:10})}>increment</button>
            <button onClick={()=> dispatch({type:'decrement', payload:10})}>Decrement</button>
    </>)
}