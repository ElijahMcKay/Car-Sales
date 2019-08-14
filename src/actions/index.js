
export const removeItem = () => {

    return {
        type: 'REMOVE_FEATURE'
    }
}


export const addItem = (itemName) => {
    return { 
        type: 'ADD_ITEM',
        payload: itemName, 
    }
}
    // ^^^^^^ make action creation functions out of these things