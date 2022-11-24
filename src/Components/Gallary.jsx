import React from 'react';
import '../Styles/Gallary.css';
import {Link} from "react-router-dom";

const gallary = [
    {
        id: 1,
        name: 'T-SHIRT',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_DragonBallZ_drop_Hero2_JULY2022_2000x.jpg?v=1659539845'
    },
    {
        id: 2,
        name: 'ACCESSORIES',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_evangelion_drop_Hero_JULY2022_2000x.jpg?v=1659027210'
    },
    {
        id: 3,
        name: 'JERSEYS',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Doraemon_drop_Hero_JULY2022_2000x.jpg?v=1659109102'
    },
    {
        id: 4,
        name: 'SOCKS',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_SpyFamily_drop_Hero_JULY2022_2000x.jpg?v=1658938075'
    },
    {
        id: 5,
        name: 'JACKETS',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'
    },
    {
        id: 6,
        name: 'HOODIE',
        img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/files/Atsuko_Gatchaman_drop_Hero_JULY2022_2000x.jpg?v=1658779601'
    }
];

const Gallary = () => {
    return (
        <div className='Gallary'>
            {
                gallary.map(gal => (
                    <div id={gal.id} className='item'>
                        <img src={gal.img} alt={gal.name}/>
                        <div className='info'>
                            <h3>{gal.name}</h3>
                            <Link to='/products'>SHOW MORE</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Gallary;