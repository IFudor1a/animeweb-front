import React from 'react';
import '../Styles/AdminPage.scss';
import {Link} from "react-router-dom";

const choices = [
    {
        id: 1,
        name: "Product",
        link: '/admin/product'
    },
    {
        id: 2,
        name: "Brand",
        link: '/admin/brand'
    },
    {
        id: 3,
        name: "Category",
        link: '/admin/category'
    },
    {
        id: 4,
        name: "Customer",
        link: '/admin/customer'
    },
    {
        id: 5,
        name: "Role",
        link: '/admin/role'
    }
]
const ChoiceLabel = ({choice}) => {
    return (
        <Link to={choice.link} className='Label'>
        <div>
            <div>{choice.name}</div>
        </div>
        </Link>
    )
}

const AdminPageLabel = () => {
    return (
        <div className='AdminPageLabel'>
            {
                choices.map(choice => (
                    <ChoiceLabel choice={choice}/>
                ))
            }
        </div>
    );
};


export default AdminPageLabel;