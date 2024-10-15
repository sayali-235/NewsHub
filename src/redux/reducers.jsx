import { SET_CATEGORY, SET_NEWS, SET_SELECTED_ARTICLE, TOGGLE_MODAL,SET_FORMDATA, SET_ERRORS,SET_IMAGE_SRC} from "./actions";

const initalState ={
    category :"sports",
    news :[],
    selectedArticle :null,
    showModal:false,
    imageSrc :"",
    formData: {
        username:"",
        email:"",
        phone:"",
        password:"",
    },
    errors :{
        username: "",
        email: "",
        phone: "",
        password: ""
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

        case SET_ERRORS:
            return  { ...state, errors :action.payload}

        case SET_IMAGE_SRC:
            return { ...state,imageSrc : action.payload}

        default:
            return state;

    }
};

export default newsReducer;