export function myReducer(state,action){
     if(action.type=="inc1"){
        return state+1
     }else if(action.type=="dec1"){
        return state-1
     }else{
        return state
     }
}