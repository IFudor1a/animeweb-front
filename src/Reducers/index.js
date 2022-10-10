import users from './users';
import products from "./products";
import {combineReducers} from "redux";

export default combineReducers({
    users,
    products
})