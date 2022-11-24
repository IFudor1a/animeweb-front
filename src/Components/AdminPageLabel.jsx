import React from 'react';
import '../Styles/AdminPage.scss';

const choices = [
    {
        id: 1,
        name: "Product"
    },
    {
        id: 2,
        name: "Brand"
    },
    {
        id: 3,
        name: "Category"
    },
    {
        id: 4,
        name: "Customer"
    }
]
const ChoiceLabel = ({choice}) => {
    return (
        <div className='Label'>
            <div>{choice.name}</div>
        </div>
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