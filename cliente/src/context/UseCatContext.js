import { useReducer } from "react";
import CategoryContext from "./CategoryContext";
import CategoryReducer from "./CategoryReducer";

export default function UseCatContext({children}){
    const state_initial = {
        cate:[]
    }
    const [state, dispatch] = useReducer(CategoryReducer, state_initial)

    const get_Categorys = (categorys) => {
        dispatch({type:'UPDATE_CATEGORYS', payload:categorys})
    }
    return(
        <CategoryContext.Provider value={{
            cate: state.cate,
            get_Categorys
        }}>
            {children}
        </CategoryContext.Provider>
    )
}