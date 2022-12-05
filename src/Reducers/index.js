import users from './users';
import products from "./products";
import {combineReducers} from "redux";
import errors from "./error";
import brands from "./brands";
import categories from "./categories";

export default combineReducers({
    users,
    products,
    errors,
    brands,
    categories
})