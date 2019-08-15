
export const removeItem = (itemName) => {

    return {
        type: 'REMOVE_FEATURE',
        payload: itemName,
    }
}


export const addItem = (itemName) => {
    return { 
        type: 'ADD_ITEM',
        payload: itemName, 
    }
}
    // ^^^^^^ make action creation functions out of these things