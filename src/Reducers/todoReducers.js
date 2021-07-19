const initialState = {
    list:[]
}


const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const {id,data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                        {
                           id: id,
                           data: data 
                        }
                    ]
            }
        case 'DELETE':
                console.log('wants to delete: ' + action.payload);
                alert('wants to delete: ' + action.payload);
                return {
                    ...state
                }
        case 'REMOVE_ALL':
                return {

                }    
        case 'TEST':
                console.log("alert invoked");
                return {
                    
                    }   
        default :
            return state;
    }
}

export default todoReducers;