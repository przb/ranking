import {createContext, useReducer} from "react";

export const ItemContext = createContext()

export const itemsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return {
                items: action.payload
            }
        case 'ADD_ITEM':
            return {
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}

export const ItemContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(itemsReducer, {items: null})



    // dispatch({type:'SET_ITEMS', payload: [{}, {}]})

    return (
        <ItemContext.Provider value={{...state, dispatch}}>
            { children }
        </ItemContext.Provider>
    );
}