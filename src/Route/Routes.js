import AdminPage from "../Pages/AdminPage";
import BasketPage from "../Pages/BasketPage";
import MainPage from "../Pages/MainPage";
import Auth from "../Pages/Auth";
import ProductPage from "../Pages/ProductPage";
import ProductsPage from "../Pages/ProductsPage";
import AdminBrandForm from "../Components/AdminBrandForm";
import AdminCategoryForm from "../Components/AdminCategoryForm";
import AdminCustomerForm from "../Components/AdminCustomerForm";
import AdminProductForm from "../Components/AdminProductForm";
import AdminRoleForm from "../Components/AdminRoleForm";

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
    },
    {
        path: ADMIN_ROUTE + '/brand',
        element: <AdminBrandForm/>
    },
    {
        path: ADMIN_ROUTE + '/category',
        element: <AdminCategoryForm/>
    },
    {
        path: ADMIN_ROUTE + '/customer',
        element: <AdminCustomerForm/>
    },
    {
        path: ADMIN_ROUTE + '/product',
        element: <AdminProductForm/>
    },
    {
        path: ADMIN_ROUTE + '/role',
        element: <AdminRoleForm/>
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