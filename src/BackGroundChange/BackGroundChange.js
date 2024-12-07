// export function mychangeColor(state, action) {
//   if (action.type == "blue") {
//     return (state = "blue");
//   } else if (action.type == "black") {
//     return (state = "black");
//   } else if (action.type == "yellow") {
//     return (state = "yellow");
//   } else if (action.type == "red") {
//     return (state = "red");
//   } else {
//     return state;
//   }
// }


export function mychangeColor(state, action) {
    switch (action.type){
        case "red" :
            return "red"
        case "black" :
            return "black"
        case "yellow" :
            return "yellow"
        case "blue" :
            return "blue"
        case "random":
            let r = Math.trunc(Math.random()*255)
            let g = Math.trunc(Math.random()*255)
            let b = Math.trunc(Math.random()*255)
            return `rgb(${r},${g},${b})`
        case "inputText":
            return action.payload
    }
  }
  