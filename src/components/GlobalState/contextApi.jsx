import React,{createContext,useReducer} from 'react'
import Reducer from './reducer'

const obj ={
    country:'Global'
}

export const ContextApi = createContext(obj)

export const GlobalContext =({children})=>{
    const [state,dispatch] = useReducer(Reducer,obj)
    function ChangeCountry(data){
        dispatch({type:'CHANGE',payload:data})
    }
    return(
        <ContextApi.Provider value={{context:state,ChangeCountry}}>
            {children}
        </ContextApi.Provider>
    )
}

