import { SET_CATEGORY, SET_NEWS, SET_SELECTED_ARTICLE,setSelectedArticle,TOGGLE_MODAL,SET_FORMDATA, setFormData } from "./actions";

const initalState ={
    category :"sports",
    news :[],
    selectedArticle :null,
    showModal:false,
    formData: {
        username:"",
        email:"",
        phone:"",
    },
};

 export const newsReducer =(state =initalState,action) =>{
    switch(action.type)
    {
        case SET_CATEGORY : 
            return { ...state,category:action.payload };

        case SET_NEWS :
            return { ...state,news:action.payload};

        case SET_SELECTED_ARTICLE:
            return { ...state, selectedArticle:action.payload};

        case TOGGLE_MODAL:
            return { ...state,showModal:action.payload};

        case SET_FORMDATA :
            return { ...state, formData : action.payload};

        default:
            return state;

    }
};

export default newsReducer;