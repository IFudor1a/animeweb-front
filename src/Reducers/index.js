import users from './users';
import products from "./products";
import {combineReducers} from "redux";
import errors from "./error";

export default combineReducers({
    users,
    products,
    errors
})