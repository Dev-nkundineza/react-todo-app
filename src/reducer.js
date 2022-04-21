const initialState = {
    todos:[],
};

const reducer = (state= initialState, action) => {
    switch(action.type){
        case 'ADD_TODOS':
            return{
                ...state,
                todos:[...state.todos, action.payload ],
            };
        case 'DELETE_TODOS':
            return{
                ...state,
                todos: state.todos.filter(todo =>  todo.id !== action.payload ),
            };
        default:
            return state;
    }
};

export default reducer;