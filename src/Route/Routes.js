import AdminPage from "../Pages/AdminPage";
import BasketPage from "../Pages/BasketPage";
import MainPage from "../Pages/MainPage";
import Auth from "../Pages/Auth";
import ProductPage from "../Pages/ProductPage";
import ProductsPage from "../Pages/ProductsPage";

export const MAIN_ROUTE = '/';
export const ADMIN_ROUTE = '/admin';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const PRODUCT_ROUTE = '/products';
export const BASKET_ROUTE = '/cart';
export const PRODUCTS_ROUTE = '/products';


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminPage/>
    },
    {
        path: BASKET_ROUTE,
        element: <BasketPage/>
    }
];
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <REGISTRATION_ROUTE/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        element: <ProductPage/>
    },
    {
        path: PRODUCTS_ROUTE,
        element: <ProductsPage/>
    }

]