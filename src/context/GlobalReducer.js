const GlobalReducer = (state , action) => {

    switch(action.type){
 
         case "SAVE_TODO" :
             return {
                 ...state,
                 todos : [...state.todos , action.payload]
             }
 
         case "DELETE_TODO" : 
         return {
             ...state,
             todos : state.todos.filter(item => item.id !== action.payload)
         }
 
         case "EDIT_TODO" : 
         return {
             ...state,
             edit : { todo : action.payload , isEdit : true }
         }
 
         case "UPDATE_TODO" : 
         return {
             ...state,
             todos : state.todos.map(todo => todo.id === action.payload.id ? {...todo , text : action.payload.text} : todo),
             edit : {todo : {} , isEdit : false}
         }
 
         case "RESET" : 
         return {
             ...state,
             todos : action.payload
         }
 
             default : 
             return state
    }
 
       
 
 }
 
 export default GlobalReducer