export const addItem = (data) => {
    console.log("flag");
    const id= new Date().getTime().toString();
return {
    type: "ADD",
    payload: {
        id: id, 
        data: data,
    }
}
}

export const deleteItem = (id) => {
 return {
        type: "DELETE",
        payload: id
    }  
}

export const removeAll = () => {
    return {
           type: "REMOVE_ALL",
       }  
}

export const testAlert = () => {
    return {
           type: "TEST",
       }  
}


