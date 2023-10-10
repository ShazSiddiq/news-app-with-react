import { GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_SUCCESS } from "../constant/news.constant";

const initialState = {
    news: [],
    newsCategories: [],
    categories:
        [
            "war ",
            "government",
            "politics ",
            "education ",
            " health ",
            "environment",
            "economy",
            "business ",
            "fashion",
            " entertainment ", 
            "sport "
        ]
}
export const newsReducer = (state=initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_ALL_NEWS_SUCCESS:
            return{
                ...state,
                news:[...action.payload]
            }

            case GET_CATEGORY_NEWS_SUCCESS:
                return{
                    ...state,
                    newsCategories:[...action.payload]
                }    
        
        default:
            return state;
    }
}